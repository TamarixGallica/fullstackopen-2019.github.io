(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,t,a){"use strict";a.r(t);var n=a(516),i=a(140),l=a(180),s=a(139),o=a(146),r=a(163),c=a(0),u=a.n(c),m=a(162),d=a(182);t.default=function(){return u.a.createElement(r.a,null,u.a.createElement(m.a,{title:"Usein kysytyt kysymykset",keywords:["fullstack","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","web-sovelluskehitys"]}),u.a.createElement(s.a,{className:"container link spacing spacing--after"},u.a.createElement(d.a,{className:"spacing--after-small",headingLevel:"h1",text:"Usein kysytyt kysymykset"}),u.a.createElement(i.StaticQuery,{query:"10433134",render:function(e){var t=e.allFaqJson.edges;return u.a.createElement(u.a.Fragment,null,t.map(function(e){var t=e.node;return u.a.createElement(l.a,{key:t.title,title:t.title,content:t.text})}))},data:n})),u.a.createElement(o.a,null))}},145:function(e,t,a){"use strict";a.d(t,"a",function(){return g});a(28),a(157);var n=a(141),i=a.n(n),l=(a(179),a(174)),s=a.n(l),o=a(166),r=a.n(o),c=a(4),u=a.n(c),m=a(0),d=a.n(m),p=a(169),h=a.n(p),k=a(139),g=function(e){var t=e.text,a=e.className,n=e.heading,l=e.headingFontSize,o=e.bold,c=e.centered,u=e.noPadding,m=e.headingFont,p=i()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),g=[];c&&g.push("centered"),o&&g.push("bold"),u&&g.push("body-text--no-padding"),m&&g.push("heading-font");var y={replace:function(e){var t=e.type,a=e.attribs,n=e.children;if("tag"===t&&"github-logo"===a.class)return d.a.createElement(k.a,{flex:!0,autoBottomMargin:!0,className:"github-logo__container"},d.a.createElement("img",{style:{maxWidth:"1rem",maxHeight:"1rem",margin:"auto 0"},alt:"github-logo",src:h.a}),d.a.createElement("p",{style:{marginLeft:"0.611rem"}},r()(n,y)))}};return d.a.createElement("div",Object.assign({className:"body-text "+a},p),n.title&&function(){if(n){var e=n.level;return d.a.createElement(e,{className:"body-text__title",style:l?{fontSize:l}:{}},n.title)}return null}(),t&&"string"==typeof t?d.a.createElement("p",{className:"body-text__content "+g.join(" ")},t):t&&t.map(function(e){return d.a.createElement("div",{key:e,className:"body-text__content "+g.join(" ")},s()(e,y))}))};g.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},g.propTypes={heading:u.a.shape({text:u.a.string,level:u.a.string}),headingFontSize:u.a.string,text:u.a.oneOfType([u.a.string,u.a.array]),className:u.a.string,centered:u.a.bool,bold:u.a.bool,noPadding:u.a.bool}},146:function(e,t,a){"use strict";a(147);var n=a(139),i=a(150),l=a(140),s=a(0),o=a.n(s),r=a(152),c=a.n(r),u=a(164),m=a(153),d=[{src:a.n(m).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(){return o.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},o.a.createElement(n.a,{className:"col-5 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},d.map(function(e){return o.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},o.a.createElement(i.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),o.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},o.a.createElement("div",{className:"footer__navigation-link-container"},u.b.map(function(e){return o.a.createElement(l.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},147:function(e,t,a){},169:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},179:function(e,t,a){},180:function(e,t,a){"use strict";var n=a(6),i=a.n(n),l=(a(181),a(140)),s=a(4),o=a.n(s),r=a(0),c=a.n(r),u=a(145),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpened:!1},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},a.render=function(){var e=this,t=this.props,a=t.title,n=t.content,i=t.className,s=t.containerClassName,o=t.list,r=t.titleStyle,m=this.state.isOpened;return c.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+s},c.a.createElement("button",{className:"accordion accordion__title "+(m?"active":"")+" "+i,style:r,onClick:function(){return e.setState({isOpened:!m})}},a),c.a.createElement("div",{className:"panel",style:{padding:m?"2rem 18px":"",maxHeight:""+(m?"unset":0),transition:"max-height 0.2s ease-out"}},n&&c.a.createElement(u.a,{className:"col-8 push-right-1",text:n}),o&&c.a.createElement("ul",null,o.map(function(e){return c.a.createElement("li",{key:e.text},c.a.createElement(l.Link,{to:e.href},e.text))}))))},t}(r.Component);m.propTypes={title:o.a.string.isRequired,content:o.a.oneOfType([o.a.string,o.a.array]),list:o.a.array,className:o.a.string,containerClassName:o.a.string,initiallyOpened:o.a.bool,titleStyle:o.a.object},m.defaultProps={className:"",containerClassName:"",initiallyOpened:!1,titleStyle:{}},t.a=m},181:function(e,t,a){},182:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(28);var n=a(141),i=a.n(n),l=(a(183),a(4)),s=a.n(l),o=a(0),r=a.n(o),c=function(e){var t=e.className,a=e.headingLevel,n=void 0===a?"h2":a,l=e.headingFontSize,s=e.text,o=i()(e,["className","headingLevel","headingFontSize","text"]),c=n;return r.a.createElement(c,Object.assign({className:"sub-header "+t,style:l?{fontSize:l}:{}},o),s)};c.propTypes={className:s.a.string,headingLevel:s.a.string,text:s.a.string.isRequired,headingFontSize:s.a.string},c.defaultProps={className:""}},183:function(e,t,a){},516:function(e){e.exports={data:{allFaqJson:{edges:[{node:{title:"Miten kurssille ilmoittaudutaan?",text:["Kurssille ei tarvitse varsinaisesti ilmoittautua ennen kuin haluat tehdä kurssin kokeen. Koe tehdään Avoimen yliopiston Moodle-järjestelmään. Katso lisää <a href='/osa0/yleista#arvosteluperusteet'>täältä</a>."]}},{node:{title:"Mikä on kurssin laajuus?",text:["Kurssin laajuus on <a href='osa0/yleista#arvosteluperusteet'>riippuen tekemiesi tehtävien määrästä</a>  3-8 opintopistettä. Suoritettuasi kurssin voit jatkaa aihepiiriin syventymistä 1-10 opintopisteen laajuisessa <a href='/osa0/yleista#full-stack-harjoitustyo'>Full stack -harjoitustyön</a> parissa."]}},{node:{title:"Milloin on tehtävien ja kokeen deadline?",text:["Etenemisnopeus on vapaa, kurssilla on ainoastaan yksi deadline sekä tehtäville että kokeelle 10.1.2020 klo 23.59.59. Kannattaa kuitenkin huomata, että kurssille on ilmoittauduttava viimeistään deadliea edeltävänä päivänä 9.1.2020."]}},{node:{title:"Miten tehtävät palautetaan?",text:["Tehtävät palautetaan GitHubin kautta ja merkitsemällä tehdyt tehtävät palautussovellukseen, lue lisää <a href='/osa0/yleista#tehtavien-palauttaminen'>täältä</a>."]}},{node:{title:"Pitääkö jokainen osa palauttaa omaan repositorioon?",text:["Ei. Voit käyttää yhtä tai useampaa repositoriota, tärkeintä että asiat repositorion sisällä ovat selkeästi nimettyjä."]}},{node:{title:"Voinko muokata tekemääni palautusta?",text:["Et. Kaikki osan tehtävät on palautettava kerralla. Jos merkkasit tehtäviä vahingossa väärin tai typotit repositorion nimen, lähetä mailia osoitteeseen mluukkai@cs.helsinki.fi"]}},{node:{title:"Voinko laajentaa aiempaa kurssisuoritustani?",text:["Voit, lue lisää <a href='/osa0/yleista#aiemmin-suoritetun-kurssin-taydentaminen'>täältä</a>"]}},{node:{title:"Suoritin kurssin viime vuonna. Miten opin käyttämään React hookeja?",text:["State hookia, eli tapaa määritellä tila funktionaalisille komponenteille käsitellään <a href='/osa1/komponentin_tila_ja_tapahtumankasittely/#tilallinen-komponentti'>osassa 1</a>. Lifecycle-metodien roolia hoitavia effect hookeja käsitellään <a href='/osa2/palvelimella_olevan_datan_hakeminen#effect-hookit'>osassa 2</a>. Custom hookeista puhutaan <a href='/osa5/custom_hookit'>osassa 5</a>"]}},{node:{title:"Will there be an English translation of the course?",text:["Hopefully some day. Currently we do not have resources for translation, but let us see..."]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-faq-js-3c85146203158704e960.js.map