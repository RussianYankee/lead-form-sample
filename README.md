# Distributable lead form for the website

### How to use the lead form

1. Update the `<form>` tag inside the `omaLeadForm.js` file with the correct URL for the API endpoint
```javascript
    const formHTML = `
        <form action="YOUR_ENDPOINT_URL" method="POST" class="p-3 border rounded needs-validation" novalidate>
```
2. Deploy the `omaLeadForm.js` file to your server
3. Add the following tags to the `<head>` section of your website and set your unique lead form ID
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="lead-form-id" content="unique_id">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```
4. Add the following `<script>` tag to the `<body>` section of your website and update the `src` attribute with the correct path to the `omaLeadForm.js` file
```html
<script src="path/to/omaLeadForm.js"></script>
```

### Example
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <meta name="lead-form-id" content="unique_id">
</head>
<body>
    <script src="https://example.com/some-path/omaLeadForm.js"></script>
</body>
</html>
```
