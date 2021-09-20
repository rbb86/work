
function initiateScroll(){
    //Select the element above the Sticky unit
    const upper = document.querySelector('.latest');
    //Select the sticky unit 
    const spot = document.getElementById('div-gpt-autoad-1534748304007-2');
    //Select the footer
    const footer = document.querySelector('.footer');
    //Manually set the height of the header in pixels
    const headerHeight = 84;
    //Set the widht under which the sidebar is hidden or moved at the bottom of the page
    const minWidth = 1230;
            
    //We execute the logic only if the sticky unit is on the page
    if(spot != null && window.innerWidth > minWidth ){
        //A variable to keep the state of the sticky unit. 
        let isActive = true;
    
        function scrollMonitor(){
            if(upper.getBoundingClientRect().bottom < headerHeight && footer.getBoundingClientRect().top >(600+headerHeight) && isActive){
                spot.style.position = 'fixed';
                spot.style.top = headerHeight + 'px';
                return
            }

            if(footer.getBoundingClientRect().top < (600+headerHeight) && isActive){
                spot.style.position = 'fixed';
                spot.style.top = (footer.getBoundingClientRect().top -600) + 'px';
                return
            }

            if(spot.style.position !== 'static'){
                spot.style.position = 'static';
            }
        }

        // On resize of the window we check the width and if necessary disable the sticky unit
        function checkWidth(){
            if(window.innerWidth <= minWidth){
                spot.style.position = 'static';
                isActive = false;
                return
            }
            isActive = true;
        }

        document.addEventListener('scroll', scrollMonitor);
        window.addEventListener('resize', checkWidth);
    }
}

//In order to select elements they must be present on the page. This is why we wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', initiateScroll)
