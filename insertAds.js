try {
    function insertAds() {
        const isMobile = navigator.userAgent.match(/(android|iphone|blackberry|ipod|netfront|model-orange|javaplatform|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|huawei|bolt|gobrowser|maemo browser|nokia|bb10|ipad)/gi) ? true : false;

        const identifier = isMobile ? "div-gpt-ad-jobstamilin390010" : "div-gpt-ad-jobstamilin39001"

        function insertInContent(targetEl, dataParam) {
            var div = document.createElement('div');
            div.setAttribute("data-pg-ad-spot", dataParam);
            var adWrapper = document.createElement('div');
            adWrapper.style = "text-align:center;";
            adWrapper.appendChild(div);
            var parent = targetEl.parentNode
            parent.insertBefore(adWrapper, targetEl);
        }

        const paras = Array.from(document.querySelectorAll('.main-text > p'));
        if(isMobile){
            for (let i = 8; i < paras.length; i+=6) {
                insertInContent(paras[i], identifier)
            }
        }else{
            for (let i = 7; i < paras.length; i+=4) {
                insertInContent(paras[i], identifier)
            }
        }

    }

  if(document.readyState !== 'loading'){
    insertAds()
  }else{
      document.addEventListener('DOMContentLoaded', insertAds)
  }
} catch (err) {}
