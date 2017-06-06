/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


//initialize the goodies 
function initAd(){
    if ( window.plugins && window.plugins.AdMob ) {
        var ad_units = {
            ios : {
                banner: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',       //PUT ADMOB ADCODE HERE 
                interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'  //PUT ADMOB ADCODE HERE 
            },
            android : {
                banner: 'ca-app-pub-8410246169560096/2315499360',       //PUT ADMOB ADCODE HERE 
                interstitial: 'ca-app-pub-8410246169560096/9339238560'  //PUT ADMOB ADCODE HERE 
            }
        };
        var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

        window.plugins.AdMob.setOptions( {
            publisherId: admobid.banner,
            interstitialAdId: admobid.interstitial,
            adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,  //use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD 
            bannerAtTop: false, // set to true, to put banner at top 
            overlap: true, // banner will overlap webview  
            offsetTopBar: false, // set to true to avoid ios7 status bar overlap 
            isTesting: false, // receiving test ad 
            autoShow: false // auto show interstitial ad when loaded 
        });

        registerAdEvents();
        window.plugins.AdMob.createInterstitialView();  //get the interstitials ready to be shown 
        window.plugins.AdMob.requestInterstitialAd();

    } else {
        //alert( 'admob plugin not ready' ); 
    }
}
//functions to allow you to know when ads are shown, etc. 
function registerAdEvents() {
    document.addEventListener('onReceiveAd', function(){});
    document.addEventListener('onFailedToReceiveAd', function(data){});
    document.addEventListener('onPresentAd', function(){});
    document.addEventListener('onDismissAd', function(){ });
    document.addEventListener('onLeaveToAd', function(){ });
    document.addEventListener('onReceiveInterstitialAd', function(){ });
    document.addEventListener('onPresentInterstitialAd', function(){ });
    document.addEventListener('onDismissInterstitialAd', function(){
        window.plugins.AdMob.createInterstitialView();          //REMOVE THESE 2 LINES IF USING AUTOSHOW 
        window.plugins.AdMob.requestInterstitialAd();           //get the next one ready only after the current one is closed 
    });
}

//display the interstitial 
function showInterstitialFunc(){
    window.plugins.AdMob.showInterstitialAd();
}
//display the banner 
function showBannerFunc(){
    window.plugins.AdMob.createBannerView();
}

function gId(x){
   return document.getElementById(x);
}
var ctx = gId("canvas").getContext("2d");
    ctx.fillStyle = "#000";
    ctx.font = "40px Arial";
var H = (window.screen.height)*0.957;
var W = (window.screen.width);

var Quadrado = function(cor,posX,posY){

    this.w = W/3,
    this.h = H/6,
    this.move = 0,
    this.ponto = false;
    self = this;

    self.cor = cor;
    self.posX = posX;
    self.posY = posY;

    this.desenha = function(){

        ctx.fillStyle = this.cor;
        ctx.fillRect(this.posX,this.posY, this.w, this.h);
    }

    this.movimenta = function(){
        this.posY += 9;
    }

};

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

        initAd();

        var Wq = W/3;
        var Hq = H/6;
        var move = [0, 0, 0, 0, 0, 0, 0, 0];
        var pWq = [0, Wq, Wq*2];
        var pHq = [0-Hq, 0-Hq*3, 0-Hq*6];
        var cores = ["#16a085","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c","#bdc3c7","#7f8c8d"];
        var dont = cores[Math.floor(Math.random() *10)];
        var gameOver = 0;
        var jogo;
        var vidas = 3 - gameOver;
        var proCount = 0;

        gId("canvas").height = H;
        gId("canvas").width = W;
        gId("canvas").addEventListener("click", clica);

        gId("cor").style.background = dont;
        
        gId("play").addEventListener("click", play);

        function play(){
            gId("ini").style.display = "none";
            gId("canvas").style.display = "block";
            jogo = setInterval(tela, 30);
        }


        var quadrado1 = new Quadrado(cores[Math.floor(Math.random() *10)], pWq[Math.floor(Math.random() *3)], pHq[0]);
        var quadrado2 = new Quadrado(dont, pWq[Math.floor(Math.random() *3)], pHq[1]);
        var quadrado3 = new Quadrado(cores[Math.floor(Math.random() *10)], pWq[Math.floor(Math.random() *3)], pHq[2]);
        
        // if (By < (Jy+110) && By > Jy) {
        //     if ((Bx+100) > Jx+10 && Bx < Jx+40) {

        //     }
        // }

        function clica(e) {
            var cx = e.clientX;
            var cy = e.clientY;

            if (cy < quadrado1.posY+quadrado1.h && cy > quadrado1.posY) {
                if (cx < quadrado1.posX+quadrado1.w && cx > quadrado1.posX) {
                    if (quadrado1.cor != dont) {
                        quadrado1.ponto = true;
                        gId("plim").play();
                    }else{
                        if (proCount == 4) {
                            showInterstitialFunc();
                            proCount = 0;
                        }
                        proCount ++;
                        clearInterval(jogo);
                        novo();
                    }
                }
            }
            if (cy < quadrado2.posY+quadrado2.h && cy > quadrado2.posY) {
                if (cx < quadrado2.posX+quadrado2.w && cx > quadrado2.posX) {
                    if (quadrado2.cor != dont) {
                        quadrado2.ponto = true;
                        gId("plim").play();
                    }else{
                        if (proCount == 4) {
                            showInterstitialFunc();
                            proCount = 0;
                        }
                        proCount ++;
                        clearInterval(jogo);
                        novo();
                    }
                }
            }
            if (cy < quadrado3.posY+quadrado3.h && cy > quadrado3.posY) {
                if (cx < quadrado3.posX+quadrado3.w && cx > quadrado3.posX) {
                    if (quadrado3.cor != dont) {
                        quadrado3.ponto = true;
                        gId("plim").play();
                    }else{
                        if (proCount == 4) {
                            showInterstitialFunc();
                            proCount = 0;
                        }
                        proCount ++;
                        clearInterval(jogo);
                        novo();
                    }
                }
            }


            // alert("x:"+cx+" y:"+cy);
        }

        function novo(){
            dont = cores[Math.floor(Math.random() *10)];
            gId("cor").style.background = dont;
            gId("ini").style.display = "block";
            gId("canvas").style.display = "none";
            gameOver = 0;
            quadrado1 = new Quadrado(cores[Math.floor(Math.random() *10)], pWq[Math.floor(Math.random() *3)], pHq[0]);
            quadrado2 = new Quadrado(dont, pWq[Math.floor(Math.random() *3)], pHq[1]);
            quadrado3 = new Quadrado(cores[Math.floor(Math.random() *10)], pWq[Math.floor(Math.random() *3)], pHq[2]);
        }

        function tela(){
            ctx.clearRect(0,0, W, H);
            ctx.fillStyle = "#000";
            ctx.font = "35px Arial";
            ctx.fillText("vidas: "+(vidas - gameOver), 10,32);
            ctx.fillStyle = "#f00";
            ctx.font = "35px Arial";
            ctx.fillText("vidas: "+(vidas - gameOver), 12,30);            
            if (gameOver >= 4) {
                if (proCount == 4) {
                    showInterstitialFunc();
                    proCount = 0;
                }
                proCount ++;
                clearInterval(jogo);
                novo();

            }else{
                quadrado1.desenha();
                quadrado1.movimenta();
                
                quadrado2.desenha();
                quadrado2.movimenta();
                
                quadrado3.desenha();
                quadrado3.movimenta();
          
                if (quadrado1.posY > H) {
                    if (quadrado1.cor != dont && quadrado1.ponto == false) {
                        gameOver++;
                    }
                    quadrado1.posY = pHq[0];
                    quadrado1.posX = pWq[Math.floor(Math.random() *3)];
                    quadrado1.cor = cores[Math.floor(Math.random() *10)];
                    quadrado1.ponto = false;
                }
                if (quadrado2.posY > H ) {
                    if (quadrado2.cor != dont && quadrado2.ponto == false) {
                        gameOver++;
                    }
                    quadrado2.posY = pHq[0];
                    quadrado2.posX = pWq[Math.floor(Math.random() *3)];
                    quadrado2.cor = cores[Math.floor(Math.random() *10)];
                    quadrado2.ponto = false;
                }
                if (quadrado3.posY > H) {
                    quadrado3.posY = pHq[0];
                    quadrado3.posX = pWq[Math.floor(Math.random() *3)];
                    quadrado3.cor = cores[Math.floor(Math.random() *10)];
                    if (quadrado2.cor != dont && quadrado2.ponto == false) {
                        gameOver++;
                    }
                    quadrado3.ponto = false;

                }
            }

        }
    },
};

app.initialize();