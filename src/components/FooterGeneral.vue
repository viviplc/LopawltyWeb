<template>
    <div class="footer">
        <div class="footer-cont">
            <div class="footer-social">
                <div class="footer-logo">
                    <img src="../assets/logo.svg" class="img-fluid" />
                    <h1>Lopawlty</h1>
                </div>
                <div class="social-links">
                    <a class="social-link">
                        <i class="fa fa-fw fa-facebook-square"></i>
                    </a>
                    <a class="social-link">
                        <i class="fa fa-fw fa-instagram"></i>
                    </a>
                    <a class="social-link">
                        <i class="fa fa-fw fa-twitter-square"></i>
                    </a>
                    <a class="social-link">
                        <i class="fa fa-fw fa-linkedin-square"></i>
                    </a>
                </div>
            </div>
            <div class="footer-download">
                <img src="../assets/googleplay.svg" class="img-download" />
                <img src="../assets/appstore.svg" class="img-download" />
            </div>
        </div>
        <div class="footer-line">
            <h1>Copyright Lopawlty Canada</h1>
            <i class="fa fa-fw fa-copyright"></i>
            <h1>2022</h1>
        </div>
    </div>
</template>

<style>

.footer{
    background-color: #CACACA ;
    border-top: 6px solid #007aff;
    padding-top: 50px;
    
    
}

.footer-cont {
    display: flex;
    justify-content: space-between;
    padding-left: 130px;
    padding-right: 130px;
    padding-bottom: 20px;
}

.footer-social {
    display: flex;
  flex-direction: row;
  justify-content: center;
}

.footer-logo{
    display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-logo img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 160px;
    height: 160px;
}

.footer-logo h1{
  font-size: 50px !important;
  color: #007aff;
  align-self: center;
}

.social-links{
    margin-left: 70px;
    display: flex;
  flex-direction: column;
  justify-content: center;
}

.social-link{
    font-size: 40px;
}

.footer-download{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-download img{
    width: 278px;
    height: 78px;
    margin: 5px;
    margin-bottom: 5px;
}

.footer-line{
    padding-top: 10px;
    background-color: #007aff ;
    display: flex;
    flex-direction: row;
    color: #fff;
    font-size: 18px;
    justify-content: center;
    align-items: center;
}

.footer-line h1{
    font-size: 18px;
}

</style>