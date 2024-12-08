(function () {
    const id = document.getElementsByName('lead-form-id')[0].content;
    const formHTML = `
        <form id="leadForm" action="http://localhost:8081/api/lead-form/${id}" method="POST" class="p-3 border rounded needs-validation" novalidate>
            <div class="mb-3">
                <label for="oma-firstName" class="form-label">First name*</label>
                <input type="text" class="form-control" id="oma-firstName" name="firstName" required
                       pattern="^[a-zA-Z]{2,30}$"
                       placeholder="First name"
                >
                <div class="invalid-feedback">
                    Please provide your first name.
                </div>
            </div>
            <div class="mb-3">
                <label for="oma-lastName" class="form-label">Last name*</label>
                <input type="text" class="form-control" id="oma-lastName" name="lastName" required
                       pattern="^[a-zA-Z]{2,30}$"
                       placeholder="Last name"
                >
                <div class="invalid-feedback">
                    Please provide your last name.
                </div>
            </div>
            <div class="mb-3">
                <label for="oma-phone" class="form-label">Phone*</label>
                <input type="tel" class="form-control" id="oma-phone" name="phone" required
                       pattern="^\\(\\d{3}\\) \\d{3}-\\d{4}$"
                       placeholder="(123) 456-7890"
                >
                <div class="invalid-feedback">
                    Please provide your phone number in the format (xxx) xxx-xxxx.
                </div>
            </div>
            <div class="mb-3">
                <label for="oma-email" class="form-label">Email*</label>
                <input type="email" class="form-control" id="oma-email" name="email" required
                       pattern="^[^\\s@]+@[^\\s@]{2,30}\\.[^\\s@]{2,10}$"
                       placeholder="john@example.com"
                >
                <div class="invalid-feedback">
                    Please provide a valid email address.
                </div>
            </div>
            <div class="mb-3">
                <label for="oma-address" class="form-label">Address</label>
                <input type="text" class="form-control" id="oma-address" name="address"
                       placeholder="1234 Main St, City, State 12345"
                >
            </div>
            <div class="mb-3">
                <label for="oma-subject" class="form-label">How can we help you</label>
                <textarea class="form-control" id="oma-subject" name="subject" rows="3"
                          placeholder="Please provide a brief description of your request"
                ></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div id="formStatus" class="mt-3"></div>
        </form>
    `;

    document.addEventListener("DOMContentLoaded", function () {
        const formContainer = document.createElement('div');
        formContainer.innerHTML = formHTML;
        document.body.appendChild(formContainer);

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        })();

        document.getElementById('oma-phone').addEventListener('input', function (e) {
            var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });

        document.getElementById('leadForm').addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (this.checkValidity()) {
                const formData = new FormData(this);
                const actionUrl = this.action;
                const formStatus = document.getElementById('formStatus');
                fetch(actionUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName: formData.get('firstName'),
                        lastName: formData.get('lastName'),
                        phone: formData.get('phone'),
                        email: formData.get('email'),
                        address: formData.get('address'),
                        subject: formData.get('subject'),
                    })
                })
                    .then(response => {
                        return {
                            status: response.status,
                            data: response.body
                        }
                    })
                    .then(data => {
                        if (data.status !== 200) {
                            throw new Error('Failed to submit the form');
                        }
                        formStatus.innerHTML = '<div class="alert alert-success">Form submitted successfully!</div>';
                    })
                    .catch(error => {
                        console.error(error);
                        formStatus.innerHTML = '<div class="alert alert-danger">There was an error submitting the form. Please try again.</div>';
                    });
            }

            this.classList.add('was-validated');
        });
    });
})();
