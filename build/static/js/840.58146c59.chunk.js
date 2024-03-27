(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[840],{450:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=[{id:"story-tree",title:"Story-Tree",subtitle:"A collaborative story writing website",image:"/images/projects/storytree.png",date:"2024-3-20",desc:"A collaborative story writing website in which users can create or branch stories with others."},{id:"NBA-Dataset",title:"NBA Dataset analysis with Rshiny",subtitle:"Basketball data analysis on the 2021-2022 NBA season. ",link:"https://miked232.shinyapps.io/final-project-info201",image:"/images/projects/basketball.png",date:"2023-06-01",desc:"Used Rshiny and plotly to conduct graphs, used 3 different plot models to evalutate three difference reserach question."}]},840:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>h});r(791);var n=r(87),s=r(842),i=r(892),a=r.n(i),c=r(184);const u=t=>{let{data:e}=t;return(0,c.jsx)("div",{className:"cell-container",children:(0,c.jsxs)("article",{className:"mini-post",children:[(0,c.jsxs)("header",{children:[(0,c.jsx)("h3",{children:(0,c.jsx)(n.rU,{to:"/projects/".concat(e.id),children:e.title})}),(0,c.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,c.jsx)(n.rU,{to:"/projects/".concat(e.id),className:"image",children:(0,c.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,c.jsx)("div",{className:"description",children:(0,c.jsx)("p",{children:e.desc})})]})})};var o=r(450);const h=()=>(0,c.jsx)(s.Z,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:(0,c.jsxs)("article",{className:"post",id:"projects",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{children:(0,c.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,c.jsx)("h3",{children:"A selection of projects that I'm not too ashamed of"}),(0,c.jsx)("h3",{children:"(each project is clickable)"})]})}),o.Z.map((t=>(0,c.jsx)(u,{data:t},t.title)))]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",c="day",u="week",o="month",h="quarter",l="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),i=r-s<0,a=e.clone().add(n+(i?-1:1),o);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:u,d:c,D:d,h:a,m:i,s:s,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",v={};v[M]=p;var D="$isDayjsObject",w=function(t){return t instanceof x||!(!t||!t[D])},j=function t(e,r,n){var s;if(!e)return M;if("string"==typeof e){var i=e.toLowerCase();v[i]&&(s=i),r&&(v[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var c=e.name;v[c]=e,s=c}return!n&&s&&(M=s),s||!n&&M},b=function(t,e){if(w(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},S=g;S.l=j,S.i=w,S.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=j(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var y=p.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var r=b(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,r){return S.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!S.u(e)||e,h=S.p(t),f=function(t,e){var s=S.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(c)},$=function(t,e){return S.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,p=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case l:return n?f(1,0):f(31,11);case o:return n?f(1,p):f(0,p+1);case u:var M=this.$locale().weekStart||0,v=(m<M?m+7:m)-M;return f(n?y-v:y+(6-v),p);case c:case d:return $(g+"Hours",0);case a:return $(g+"Minutes",1);case i:return $(g+"Seconds",2);case s:return $(g+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,u=S.p(t),h="set"+(this.$u?"UTC":""),f=(r={},r[c]=h+"Date",r[d]=h+"Date",r[o]=h+"Month",r[l]=h+"FullYear",r[a]=h+"Hours",r[i]=h+"Minutes",r[s]=h+"Seconds",r[n]=h+"Milliseconds",r)[u],$=u===c?this.$D+(e-this.$W):e;if(u===o||u===l){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[S.p(t)]()},y.add=function(n,h){var d,f=this;n=Number(n);var $=S.p(h),m=function(t){var e=b(f);return S.w(e.date(e.date()+Math.round(t*n)),f)};if($===o)return this.set(o,this.$M+n);if($===l)return this.set(l,this.$y+n);if($===c)return m(1);if($===u)return m(7);var p=(d={},d[i]=e,d[a]=r,d[s]=t,d)[$]||1,y=this.$d.getTime()+n*p;return S.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),i=this.$H,a=this.$m,c=this.$M,u=r.weekdays,o=r.months,h=r.meridiem,l=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},d=function(t){return S.s(i%12||12,t,"0")},$=h||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return c+1;case"MM":return S.s(c+1,2,"0");case"MMM":return l(r.monthsShort,c,o,3);case"MMMM":return l(o,c);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(r.weekdaysMin,e.$W,u,2);case"ddd":return l(r.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,d,f){var $,m=this,p=S.p(d),y=b(n),g=(y.utcOffset()-this.utcOffset())*e,M=this-y,v=function(){return S.m(m,y)};switch(p){case l:$=v()/12;break;case o:$=v();break;case h:$=v()/3;break;case u:$=(M-g)/6048e5;break;case c:$=(M-g)/864e5;break;case a:$=M/r;break;case i:$=M/e;break;case s:$=M/t;break;default:$=M}return f?$:S.a($)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return v[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=j(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),k=x.prototype;return b.prototype=k,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",c],["$M",o],["$y",l],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,x,b),t.$i=!0),b},b.locale=j,b.isDayjs=w,b.unix=function(t){return b(1e3*t)},b.en=v[M],b.Ls=v,b.p={},b}()}}]);
//# sourceMappingURL=840.58146c59.chunk.js.map