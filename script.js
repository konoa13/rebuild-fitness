
function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}




function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open'); /* Adds "open" if missing, removes if present */
}

function closeMenu() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('open'); /* Always closes the menu */
}



// Create the observer
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        // If the element is at least 10% visible on screen
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); /* Triggers the CSS animation */
        }
    });
}, { threshold: 0.1 }); /* 0.1 = trigger when 10% of element is visible */

// Apply the observer to every element with class "fade"
document.querySelectorAll('.fade').forEach(function(el) {
    observer.observe(el);
});



function submitForm(event) {

    // Prevent the page from reloading on form submit
    event.preventDefault();

    // Track whether all fields are valid
    var allValid = true;


    function check(fieldId, groupId, testFn) {
        var value = document.getElementById(fieldId).value.trim(); /* Remove extra spaces */
        var group = document.getElementById(groupId);

        if (!testFn(value)) {
            // Validation failed — show error styling
            group.classList.add('error');
            allValid = false;
        } else {
            // Validation passed — remove error styling
            group.classList.remove('error');
        }
    }

    // Check: First name must not be empty
    check('fname', 'f-fname', function(value) {
        return value !== '';
    });

    // Check: Last name must not be empty
    check('lname', 'f-lname', function(value) {
        return value !== '';
    });


    check('email', 'f-email', function(value) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    });

    // If all validations passed, show success message
    if (allValid) {
        document.getElementById('form').style.display = 'none';       /* Hide the form */
        document.getElementById('successMsg').style.display = 'block'; /* Show success */
    }
}