        // var counter = 1;

        function darkModeFunc() {

            document.documentElement.classList.toggle('darkMode');

            document.querySelectorAll('.staySame').forEach((result) => {
                result.classList.toggle('revert');
            })

            if (localStorage.getItem("darkMode") == "On") {
                localStorage.setItem("darkMode", "Off");
            } else if (localStorage.getItem("darkMode") == "Off") {
                localStorage.setItem("darkMode", "On");
            }

            console.log("status in darkModeFun: " + localStorage.getItem("darkMode"));

        }

        function setDefaultColor() {
            // default color is that which we stored in localStorage
            var defaultStatus = localStorage.getItem("darkMode");

            // if there is no default then just set darkMode to false
            if (!defaultStatus) {
                localStorage.setItem("darkMode", "Off");
            }
        }

        window.onload = function () {
            // TODO: Make the dark Mode persisit
            setDefaultColor();

            // resetting the mode
            // localStorage.setItem("darkMode", "Off");

            console.log("Dark status in onload: " + localStorage.getItem("darkMode"));

            if (localStorage.getItem("darkMode") == "On") {
                document.documentElement.classList.toggle('darkMode');

                document.querySelectorAll('.staySame').forEach((result) => {
                    result.classList.toggle('revert');
                })
            }
        }