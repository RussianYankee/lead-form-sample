(function() {
    const id = document.getElementsByName('lead-form-id')[0].content;
    const formHTML = `
        <form action="http://mysite.com/endpoint/${id}" method="POST" class="p-3 border rounded needs-validation" novalidate>
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
        </form>
    `;

    document.addEventListener("DOMContentLoaded", function() {
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
    });
})();
