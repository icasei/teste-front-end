(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{dL23:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class i{}var o=t("pMnS"),a=t("iInd"),u=t("SVse"),r=t("Mr+X"),c=t("Gi4r"),s=t("lreY"),d=t("fqV1"),b=t("4RlZ"),g=t("UyyX");class p{constructor(n,l){this.activRoute=n,this.youtube=l,this.error=!1,this.loading=!1}ngOnInit(){this.activeRouteSub=this.activRoute.params.subscribe(n=>this.getVideoDetails(n.videoId))}ngOnDestroy(){this.activeRouteSub.unsubscribe(),this.youtubeSub.unsubscribe()}getVideoDetails(n){this.loading=!0,this.youtubeSub=this.youtube.get("/videos",this.createRequestOptions(n)).subscribe(n=>{this.videoDetails=n.items[0],this.loading=!1},n=>{console.error(n),this.error=!0,this.loading=!1})}createRequestOptions(n){return{params:{part:"snippet, statistics",id:n}}}}var h=t("bJIw"),C=e.pb({encapsulation:0,styles:[[".video-details-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;overflow:auto}.video-details-container[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;display:flex;background-color:#73bcf6;height:60px;z-index:999999}.video-details-container[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:80%;height:60px;line-height:60px;margin:0 10px;flex:9;font-family:Montserrat,sans-serif;font-weight:600;font-size:16px;color:#fff}.video-details-container[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]   .arrow-back[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;height:60px;line-height:60px}.video-details-container[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]   .arrow-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:60px;line-height:54px;font-size:16px;color:#fff;vertical-align:middle}.video-details-container[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]   .arrow-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:80px 0 0}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:0}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .container-header[_ngcontent-%COMP%]{display:flex;padding:15px 0 15px 15px;background-color:#73bcf6}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .container-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:9;color:#fff;font-size:16px;font-family:Montserrat,sans-serif;font-weight:600;margin:0}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .container-header[_ngcontent-%COMP%]   .container-header-statistics[_ngcontent-%COMP%]{flex:3;display:flex;justify-content:space-around;color:#fff;font-size:14px;font-family:Montserrat,sans-serif;font-weight:500}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .container-header[_ngcontent-%COMP%]   .container-header-statistics[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:20px;line-height:24px}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .container-header[_ngcontent-%COMP%]   .container-header-statistics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 6px}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{border:1px solid #ddd;border-top:0}.video-details-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:20px 0;font-size:14px;line-height:20px;margin-bottom:0}.error-or-loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;height:100%}.error[_ngcontent-%COMP%]{max-width:50%}.ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.statistic-report[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.statistic-report[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:2px}@media screen and (max-width:650px){.statistic-report[_ngcontent-%COMP%]{font-size:10px}.statistic-report[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:20px;height:20px;font-size:20px}}@media screen and (max-width:400px){h2[_ngcontent-%COMP%]{font-size:12px}.header-row[_ngcontent-%COMP%]{height:35px}.content[_ngcontent-%COMP%]{margin-top:40px}.container-header[_ngcontent-%COMP%]   .container-header-statistics[_ngcontent-%COMP%], .container-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:5!important}}@media screen and (min-width:401px) and (max-width:550px){h2[_ngcontent-%COMP%]{font-size:14px}.header-row[_ngcontent-%COMP%]{height:40px}.content[_ngcontent-%COMP%]{margin-top:45px}}@media screen and (min-width:551px) and (max-width:720px){h2[_ngcontent-%COMP%]{font-size:18px}.header-row[_ngcontent-%COMP%]{height:50px}.content[_ngcontent-%COMP%]{margin-top:60px}}@media screen and (min-width:721px) and (max-width:1280px){h2[_ngcontent-%COMP%]{font-size:20px}.header-row[_ngcontent-%COMP%]{height:55px}.content[_ngcontent-%COMP%]{margin-top:65px}}@media screen and (min-width:1281px){h2[_ngcontent-%COMP%]{font-size:23px}.header-row[_ngcontent-%COMP%]{height:65px}.content[_ngcontent-%COMP%]{margin-top:70px}}"]],data:{}});function f(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,40,"div",[["class","video-details-container"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,9,"div",[["class","header-row"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,6,"div",[["class","arrow-back"]],null,null,null,null,null)),(n()(),e.rb(3,0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Cb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i},null,null)),e.qb(4,671744,null,0,a.m,[a.k,a.a,u.g],{routerLink:[0,"routerLink"]},null),e.Db(5,1),(n()(),e.rb(6,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,r.b,r.a)),e.qb(7,9158656,null,0,c.b,[e.k,c.d,[8,null],[2,c.a],[2,e.l]],null,null),(n()(),e.Ib(-1,0,["arrow_back"])),(n()(),e.rb(9,0,null,null,1,"h2",[["class","ellipsis"]],null,null,null,null,null)),(n()(),e.Ib(10,null,["",""])),(n()(),e.rb(11,0,null,null,29,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.rb(12,0,null,null,28,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.rb(13,0,null,null,27,"div",[["class","content col-12"]],null,null,null,null,null)),(n()(),e.rb(14,0,null,null,0,"img",[["alt","video thumbnail"]],[[8,"src",4]],null,null,null,null)),(n()(),e.rb(15,0,null,null,25,"div",[["class","description-container"]],null,null,null,null,null)),(n()(),e.rb(16,0,null,null,21,"div",[["class","container-header"]],null,null,null,null,null)),(n()(),e.rb(17,0,null,null,1,"h4",[["class","ellipsis"]],null,null,null,null,null)),(n()(),e.Ib(18,null,["",""])),(n()(),e.rb(19,0,null,null,18,"div",[["class","container-header-statistics"]],null,null,null,null,null)),(n()(),e.rb(20,0,null,null,5,"div",[["class","statistic-report"]],null,null,null,null,null)),(n()(),e.rb(21,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,r.b,r.a)),e.qb(22,9158656,null,0,c.b,[e.k,c.d,[8,null],[2,c.a],[2,e.l]],null,null),(n()(),e.Ib(-1,0,["thumb_up"])),(n()(),e.rb(24,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Ib(25,null,["",""])),(n()(),e.rb(26,0,null,null,5,"div",[["class","statistic-report"]],null,null,null,null,null)),(n()(),e.rb(27,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,r.b,r.a)),e.qb(28,9158656,null,0,c.b,[e.k,c.d,[8,null],[2,c.a],[2,e.l]],null,null),(n()(),e.Ib(-1,0,["thumb_down"])),(n()(),e.rb(30,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Ib(31,null,["",""])),(n()(),e.rb(32,0,null,null,5,"div",[["class","statistic-report"]],null,null,null,null,null)),(n()(),e.rb(33,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,r.b,r.a)),e.qb(34,9158656,null,0,c.b,[e.k,c.d,[8,null],[2,c.a],[2,e.l]],null,null),(n()(),e.Ib(-1,0,["remove_red_eye"])),(n()(),e.rb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Ib(37,null,["",""])),(n()(),e.rb(38,0,null,null,2,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.rb(39,0,null,null,1,"p",[["style","overflow: auto"]],null,null,null,null,null)),(n()(),e.Ib(40,null,[" "," "]))],function(n,l){var t=n(l,5,0,"/");n(l,4,0,t),n(l,7,0),n(l,22,0),n(l,28,0),n(l,34,0)},function(n,l){var t=l.component;n(l,3,0,e.Cb(l,4).target,e.Cb(l,4).href),n(l,6,0,e.Cb(l,7).inline,"primary"!==e.Cb(l,7).color&&"accent"!==e.Cb(l,7).color&&"warn"!==e.Cb(l,7).color),n(l,10,0,null==t.videoDetails?null:null==t.videoDetails.snippet?null:t.videoDetails.snippet.title),n(l,14,0,null==t.videoDetails?null:null==t.videoDetails.snippet?null:null==t.videoDetails.snippet.thumbnails?null:null==t.videoDetails.snippet.thumbnails.maxres?null:t.videoDetails.snippet.thumbnails.maxres.url),n(l,18,0,null==t.videoDetails?null:null==t.videoDetails.snippet?null:t.videoDetails.snippet.channelTitle),n(l,21,0,e.Cb(l,22).inline,"primary"!==e.Cb(l,22).color&&"accent"!==e.Cb(l,22).color&&"warn"!==e.Cb(l,22).color),n(l,25,0,null==t.videoDetails?null:null==t.videoDetails.statistics?null:t.videoDetails.statistics.likeCount),n(l,27,0,e.Cb(l,28).inline,"primary"!==e.Cb(l,28).color&&"accent"!==e.Cb(l,28).color&&"warn"!==e.Cb(l,28).color),n(l,31,0,null==t.videoDetails?null:null==t.videoDetails.statistics?null:t.videoDetails.statistics.dislikeCount),n(l,33,0,e.Cb(l,34).inline,"primary"!==e.Cb(l,34).color&&"accent"!==e.Cb(l,34).color&&"warn"!==e.Cb(l,34).color),n(l,37,0,null==t.videoDetails?null:null==t.videoDetails.statistics?null:t.videoDetails.statistics.viewCount),n(l,40,0,null==t.videoDetails?null:null==t.videoDetails.snippet?null:t.videoDetails.snippet.description)})}function M(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,1,"app-loading",[],null,null,null,s.b,s.a)),e.qb(1,49152,null,0,d.a,[],null,null)],null,null)}function O(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"app-error",[["class","error"],["mainErrorMessage","Erro ao buscar video"],["secondaryErrorMessage","Tente novamente mais tarde!"]],null,null,null,b.b,b.a)),e.qb(2,49152,null,0,g.a,[],{mainErrorMessage:[0,"mainErrorMessage"],secondaryErrorMessage:[1,"secondaryErrorMessage"]},null)],function(n,l){n(l,2,0,"Erro ao buscar video","Tente novamente mais tarde!")},null)}function m(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,4,"div",[["class","error-or-loading-container"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,M)),e.qb(2,16384,null,0,u.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,O)),e.qb(4,16384,null,0,u.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.loading),n(l,4,0,t.error)},null)}function _(n){return e.Jb(0,[(n()(),e.gb(16777216,null,null,1,null,f)),e.qb(1,16384,null,0,u.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,m)),e.qb(3,16384,null,0,u.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,t.videoDetails),n(l,3,0,!t.videoDetails)},null)}function P(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,1,"app-details",[],null,null,null,_,C)),e.qb(1,245760,null,0,p,[a.a,h.a],null,null)],function(n,l){n(l,1,0)},null)}var v=e.nb("app-details",p,P,{},{},[]),x=t("IheW"),w=t("POq0"),A=t("Xd0L");class y{}var D=t("IP0z"),k=t("cUpR"),I=t("/HVE"),q=t("oapL"),z=t("HsOI"),E=t("ZwOa"),J=t("Fwaw"),j=t("igqZ"),R=t("02hT"),K=t("FVPZ"),N=t("W5yJ"),S=t("hctd"),T=t("PCNd");t.d(l,"DetailsModuleNgFactory",function(){return V});var V=e.ob(i,[],function(n){return e.zb([e.Ab(512,e.j,e.Z,[[8,[o.a,v]],[3,e.j],e.v]),e.Ab(4608,u.l,u.k,[e.s,[2,u.w]]),e.Ab(4608,x.h,x.n,[u.c,e.z,x.l]),e.Ab(4608,x.o,x.o,[x.h,x.m]),e.Ab(5120,x.a,function(n){return[n]},[x.o]),e.Ab(4608,x.k,x.k,[]),e.Ab(6144,x.i,null,[x.k]),e.Ab(4608,x.g,x.g,[x.i]),e.Ab(6144,x.b,null,[x.g]),e.Ab(4608,x.f,x.j,[x.b,e.p]),e.Ab(4608,x.c,x.c,[x.f]),e.Ab(4608,w.c,w.c,[]),e.Ab(4608,A.a,A.a,[]),e.Ab(4608,h.a,h.a,[x.c]),e.Ab(1073742336,u.b,u.b,[]),e.Ab(1073742336,a.n,a.n,[[2,a.s],[2,a.k]]),e.Ab(1073742336,y,y,[]),e.Ab(1073742336,x.e,x.e,[]),e.Ab(1073742336,x.d,x.d,[]),e.Ab(1073742336,D.a,D.a,[]),e.Ab(1073742336,A.e,A.e,[[2,A.b],[2,k.f]]),e.Ab(1073742336,c.c,c.c,[]),e.Ab(1073742336,I.b,I.b,[]),e.Ab(1073742336,q.c,q.c,[]),e.Ab(1073742336,w.d,w.d,[]),e.Ab(1073742336,z.e,z.e,[]),e.Ab(1073742336,E.b,E.b,[]),e.Ab(1073742336,A.h,A.h,[]),e.Ab(1073742336,J.c,J.c,[]),e.Ab(1073742336,j.f,j.f,[]),e.Ab(1073742336,R.a,R.a,[]),e.Ab(1073742336,A.f,A.f,[]),e.Ab(1073742336,K.a,K.a,[]),e.Ab(1073742336,N.c,N.c,[]),e.Ab(1073742336,S.a,S.a,[]),e.Ab(1073742336,T.a,T.a,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,a.i,function(){return[[{path:":videoId",component:p}]]},[]),e.Ab(256,x.l,"XSRF-TOKEN",[]),e.Ab(256,x.m,"X-XSRF-TOKEN",[])])})}}]);