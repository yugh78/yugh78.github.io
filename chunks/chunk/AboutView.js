import{o,c as t,F as m,r as v,n as x,b as e,d as u,t as h,e as y,f as d,g as C,h as T,w as k,T as S,i as L,u as b,j as N,k as M,A as E}from"../../assets/index-OLKE2NXk.js";import{_ as H}from"./plugin-vue_export-helper.js";const j={summary:{id:"summary-section"},skills:{id:"skills-section"},projects:{id:"project-section"}},I={key:0,class:"project-tags-container"},B=["onClick"],A={__name:"ProjectTags",props:{tags:[{icon:String,title:String}],selectedTags:Array},setup(s){const a=(i,n)=>{i.includes(n)||i.push(n)},l=(i,n)=>{const c="project-tag";return n.includes(i)?c+" active":c};return(i,n)=>s.tags?(o(),t("div",I,[(o(!0),t(m,null,v(s.tags,c=>(o(),t("div",{class:x(l(c,s.selectedTags)),key:c,onClick:f=>a(s.selectedTags,c)?"active":""},[e("i",{class:x(c.icon)},null,2),u(" "+h(c.title),1)],10,B))),128))])):y("",!0)}},O=["disabled","href"],P={key:0,class:"hidden group-hover/action:flex absolute bottom-full tooltip tooltip-bad"},q={class:"tooltip-icon"},R={__name:"ProjectActions",props:{actions:[{title:String,disabled:Boolean,disabled:{message:String,icon:String}}]},setup(s){return(a,l)=>(o(!0),t(m,null,v(s.actions,i=>(o(),t("a",{key:i,class:"btn btn-flat group/action",disabled:i.disabled,href:i.url,target:"_blank"},[u(h(i.title)+" ",1),i.disabled?(o(),t("span",P,[e("div",q,[e("i",{class:x(i.disabled.icon)},null,2)]),u(" "+h(i.disabled.message),1)])):y("",!0),e("i",{class:x(i.icon)},null,2)],8,O))),128))}},U={class:"rounded-xl flex flex-col justify-between gap-3 border bg-ziggurat-200 min-h-40 shadow-ziggurat-500 border-ziggurat-500 drop-shadow-sm transition-all p-6 hover:-translate-y-1 duration-300 hover:drop-shadow-2xl hover:shadow-ziggurat-950 grow"},V={class:"flex flex-row justify-between grow"},F={class:"flex flex-col grow justify-start gap-8"},D={class:"text-2xl font-semibold font-petrov text-ziggurat-500"},G=["innerHTML"],J=["src"],Q={__name:"ProjectCard",props:{project:{image:String,description:String,gif:String,name:String,tags:[],action:[]},selectedTags:{}},setup(s){return(a,l)=>(o(),t("div",U,[e("div",V,[e("div",F,[e("div",D,h(s.project.title),1),e("div",{class:"markup",innerHTML:s.project.description},null,8,G)]),s.project.gif?(o(),t("img",{key:0,src:s.project.gif,class:"h-40 min-w-32 bg-cover rounded-lg shadow-ziggurat-950 drop-shadow-lg border-ziggurat-400 border",alt:"Тут должна была быть гифка, подчёркивающая направление проекта",loading:"lazy"},null,8,J)):y("",!0)]),d(A,{tags:s.project.tags,selectedTags:s.selectedTags},null,8,["tags","selectedTags"]),d(R,{actions:s.project.actions},null,8,["actions"])]))}},K=""+new URL("../../assets/me.png",import.meta.url).href,W=""+new URL("../../assets/me_and_who.png",import.meta.url).href,X="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:svgjs='http://svgjs.dev/svgjs'%20viewBox='0%200%201422%20800'%3e%3cg%20shape-rendering='crispEdges'%20stroke-linejoin='round'%20fill='none'%20stroke-width='10'%20stroke='%23b9d5df'%3e%3cpolygon%20points='1422,0%201422,200%201066.5,200'%3e%3c/polygon%3e%3cpolygon%20points='711,200%201066.5,200%20711,0'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,400%20711,200%201066.5,200'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,400%201066.5,200%201422,400'%3e%3c/polygon%3e%3cpolygon%20points='711,0%20711,200%20355.5,200'%3e%3c/polygon%3e%3cpolygon%20points='0,200%20355.5,0%200,0'%3e%3c/polygon%3e%3cpolygon%20points='0,400%20355.5,400%20355.5,200'%3e%3c/polygon%3e%3cpolygon%20points='711,200%20355.5,400%20711,400'%3e%3c/polygon%3e%3cpolygon%20points='711,600%20711,400%20355.5,600'%3e%3c/polygon%3e%3cpolygon%20points='355.5,400%20355.5,600%200,400'%3e%3c/polygon%3e%3cpolygon%20points='0,600%20355.5,600%20355.5,800'%3e%3c/polygon%3e%3cpolygon%20points='355.5,800%20711,600%20711,800'%3e%3c/polygon%3e%3cpolygon%20points='1422,400%201066.5,400%201422,600'%3e%3c/polygon%3e%3cpolygon%20points='711,600%201066.5,400%20711,400'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,800%201066.5,600%20711,600'%3e%3c/polygon%3e%3cpolygon%20points='1422,800%201066.5,600%201422,600'%3e%3c/polygon%3e%3c/g%3e%3cg%20fill='hsl(220,%2062%25,%2045%25)'%20stroke-width='3'%20stroke='hsl(220,%2043%25,%2013%25)'%3e%3c/g%3e%3c/svg%3e",Y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:svgjs='http://svgjs.dev/svgjs'%20viewBox='0%200%201422%20800'%3e%3cg%20shape-rendering='crispEdges'%20stroke-linejoin='round'%20fill='none'%20stroke-width='10'%20stroke='%23b9d5df'%3e%3cpolygon%20points='1422,200%201422,0%201066.5,200'%3e%3c/polygon%3e%3cpolygon%20points='711,200%201066.5,0%201066.5,200'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,400%20711,200%201066.5,200'%3e%3c/polygon%3e%3cpolygon%20points='1422,400%201422,200%201066.5,400'%3e%3c/polygon%3e%3cpolygon%20points='711,200%20355.5,200%20711,0'%3e%3c/polygon%3e%3cpolygon%20points='0,0%20355.5,200%20355.5,0'%3e%3c/polygon%3e%3cpolygon%20points='355.5,400%20355.5,200%200,200'%3e%3c/polygon%3e%3cpolygon%20points='533.25,300%20711,200%20533.25,200'%3e%3c/polygon%3e%3cpolygon%20points='355.5,300%20533.25,200%20355.5,200'%3e%3c/polygon%3e%3cpolygon%20points='533.25,400%20533.25,300%20355.5,300'%3e%3c/polygon%3e%3cpolygon%20points='533.25,400%20711,400%20533.25,300'%3e%3c/polygon%3e%3cpolygon%20points='711,500%20711,400%20533.25,400'%3e%3c/polygon%3e%3cpolygon%20points='355.5,500%20355.5,400%20533.25,400'%3e%3c/polygon%3e%3cpolygon%20points='533.25,500%20533.25,600%20355.5,600'%3e%3c/polygon%3e%3cpolygon%20points='711,600%20711,500%20533.25,500'%3e%3c/polygon%3e%3cpolygon%20points='0,600%20355.5,600%20355.5,400'%3e%3c/polygon%3e%3cpolygon%20points='355.5,800%20355.5,600%200,600'%3e%3c/polygon%3e%3cpolygon%20points='711,800%20711,600%20355.5,800'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,600%201066.5,400%201422,600'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,500%20888.75,500%20888.75,400'%3e%3c/polygon%3e%3cpolygon%20points='888.75,500%20888.75,400%20711,500'%3e%3c/polygon%3e%3cpolygon%20points='888.75,600%20888.75,500%20711,600'%3e%3c/polygon%3e%3cpolygon%20points='888.75,500%201066.5,600%20888.75,600'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,600%20711,600%20711,800'%3e%3c/polygon%3e%3cpolygon%20points='1422,600%201066.5,800%201422,800'%3e%3c/polygon%3e%3c/g%3e%3cg%20fill='hsl(220,%2062%25,%2045%25)'%20stroke-width='3'%20stroke='hsl(220,%2043%25,%2013%25)'%3e%3c/g%3e%3c/svg%3e",Z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:svgjs='http://svgjs.dev/svgjs'%20viewBox='0%200%201422%20800'%3e%3cg%20shape-rendering='crispEdges'%20stroke-linejoin='round'%20fill='none'%20stroke-width='10'%20stroke='%23b9d5df'%3e%3cpolygon%20points='1422,200%201422,0%201066.5,0'%3e%3c/polygon%3e%3cpolygon%20points='711,0%20711,200%201066.5,200'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,300%20888.75,300%20888.75,200'%3e%3c/polygon%3e%3cpolygon%20points='888.75,200%20711,200%20888.75,300'%3e%3c/polygon%3e%3cpolygon%20points='888.75,400%20888.75,300%20711,400'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,300%201066.5,400%20888.75,300'%3e%3c/polygon%3e%3cpolygon%20points='1422,400%201066.5,200%201066.5,400'%3e%3c/polygon%3e%3cpolygon%20points='711,200%20355.5,200%20711,0'%3e%3c/polygon%3e%3cpolygon%20points='0,0%20355.5,0%20355.5,200'%3e%3c/polygon%3e%3cpolygon%20points='355.5,400%200,400%200,200'%3e%3c/polygon%3e%3cpolygon%20points='711,300%20711,200%20533.25,200'%3e%3c/polygon%3e%3cpolygon%20points='533.25,300%20355.5,300%20533.25,200'%3e%3c/polygon%3e%3cpolygon%20points='355.5,300%20533.25,300%20355.5,400'%3e%3c/polygon%3e%3cpolygon%20points='533.25,400%20533.25,300%20711,400'%3e%3c/polygon%3e%3cpolygon%20points='355.5,600%20711,400%20355.5,400'%3e%3c/polygon%3e%3cpolygon%20points='355.5,400%20355.5,600%200,600'%3e%3c/polygon%3e%3cpolygon%20points='0,800%200,600%20355.5,800'%3e%3c/polygon%3e%3cpolygon%20points='355.5,800%20711,800%20355.5,600'%3e%3c/polygon%3e%3cpolygon%20points='1422,600%201066.5,600%201066.5,400'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,500%20888.75,500%20888.75,400'%3e%3c/polygon%3e%3cpolygon%20points='888.75,400%20711,500%20711,400'%3e%3c/polygon%3e%3cpolygon%20points='888.75,500%20888.75,600%20711,600'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,500%20888.75,500%20888.75,600'%3e%3c/polygon%3e%3cpolygon%20points='1066.5,800%20711,800%201066.5,600'%3e%3c/polygon%3e%3cpolygon%20points='1422,800%201422,600%201066.5,600'%3e%3c/polygon%3e%3c/g%3e%3cg%20fill='hsl(220,%2062%25,%2045%25)'%20stroke-width='3'%20stroke='hsl(220,%2043%25,%2013%25)'%3e%3c/g%3e%3c/svg%3e",ee=""+new URL("../../assets/profile-site.gif",import.meta.url).href,oe=""+new URL("../../assets/tg-bot.gif",import.meta.url).href,te=""+new URL("../../assets/pizza.gif",import.meta.url).href,g={dummy:"fa-regular fa-circle hover:fa-solid",view:"fa-regular fa-eye",sourceCode:"fas fa-code",html:"fab fa-html5",notAvailable:"fas fa-ban",sql:"fas fa-database"},w={htmlCss:{title:"html/css",icon:g.html},sql:{title:"sql",icon:g.sql}},se={lists:[{title:"Кратко обо мне",description:"",items:[{title:"",text:"Cтудент второго курса по направлению <em>Программная инженерия</em> в ТУ им. А.А. Леонова",img:K},{title:"",text:"Занимаюсь каратэ Киокушинкай <em>7 лет</em>. Так что могу и... на шпагат сесть",img:W}]},{title:"Мои навыки",items:[{title:"Tailwind",description:"Этот сайт я накидал с использованием <kbd>tailwind</kbd>",iconName:"fa-brands fa-css3"},{title:"CSS/HTML",iconName:"fa-brands fa-html5"},{title:"SQL",iconName:"fa-solid fa-database",description:"Знания базовых запросов <em>(таких как: <kbd>SELECT</kbd>, <kbd>JOIN</kbd>, <kbd>INSERT</kbd>)</em>"},{title:"Figma",iconName:"fa-brands fa-figma",description:"Есть аккаунт"},{title:"Python",iconName:"fa-brands fa-python",items:[{title:"aiogram",description:"Разрабатывал телеграм ботов на заказ"},{title:"django",description:"Только трогал"}]}]},{title:"Мои проекты",items:[{title:"Мой сайт",tags:[w.htmlCss,{title:"js",icon:"fa-brands fa-js"},{title:"vue",icon:"fab fa-vuejs"},{title:"tailwind",icon:g.dummy},{title:"github-workflow",icon:"fab fa-github"}],image:X,gif:ee,description:"Мой сайт про меня",actions:[{title:"Просмотр",url:"https://yugh78.github.io/sait",icon:g.view},{title:"Исходный код",url:"https://github.com/yugh78/sait",icon:g.sourceCode}]},{title:"Телеграм бот",image:Y,gif:oe,tags:[w.sql,{title:"python",icon:"fab fa-python"},{title:"vk api",icon:"fab fa-vk"},{title:"aiogram",icon:g.dummy}],actions:[{title:"Исходный код",url:"https://github.com/yugh78/telegrambot_lurkopab",icon:g.sourceCode}]},{title:"PizzaExpress",description:'Совместный проект с <a href="https://github.com/MainMaestro">товарищем</a> для пиццерии',image:Z,gif:te,tags:[w.htmlCss,w.sql,{title:"bootstrap",icon:"fab fa-bootstrap"},{title:"dotnet",icon:g.dummy}],actions:[{title:"Просмотр",icon:g.view,disabled:{message:"Заказчик поменял дизайн",icon:g.notAvailable}},{title:"Исходный код",icon:g.sourceCode,url:"https://github.com/MainMaestro/PizzaExpress"}]}]}]},$=s=>se.lists.find(a=>a.title===s),ne=["id"],ie=e("h2",null,[u("М"),e("span",{class:"letter-highlight"},"о"),u("и проекты")],-1),le={key:0,class:"flex flex-row flex-wrap py-5 gap-2"},ce={"data-aos":"fade-right",class:"flex gap-2 items-center uppercase font-petrov select-none bg-ziggurat-400 hover:bg-ziggurat-500 text-ziggurat-50 rounded-full px-1 ps-4 py-1 shadow-ziggurat-900 drop-shadow-lg transition-all duration-300"},ae={class:"ps-2"},re=["onClick"],ge=e("i",{class:"fas fa-xmark"},null,-1),de=[ge],pe={class:"grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"},ue=["data-aos-delay"],ye={__name:"ProjectsSection",props:{sectionId:String},setup(s){const a=$("Мои проекты"),l=C([]),i=T(()=>l.length==0?a.items:a.items.filter(p=>p.tags.filter(r=>l.includes(r)).length==l.length)),n=(p,_)=>{const r=_.indexOf(p);r>=0&&_.splice(r,1)},c=(p,_)=>p[0]<_[0]?-1:p[0]>_[0]?1:0,f=T(()=>l.sort(c));return(p,_)=>(o(),t("section",{id:s.sectionId},[ie,d(L,{"leave-active-class":"animate__animated animate__fadeOutUp"},{default:k(()=>[l.length>0?(o(),t("div",le,[d(S,{"leave-active-class":"animate__animated animate__fadeOutLeft"},{default:k(()=>[(o(!0),t(m,null,v(f.value,r=>(o(),t("div",ce,[e("i",{class:x(r.icon)},null,2),e("div",ae,h(r.title),1),e("button",{onClick:z=>n(r,l),class:"rounded-full h-8 w-8 hover:bg-ziggurat-50 hover:bg-opacity-70 hover:text-ziggurat-600 active:bg-opacity-90 p-1 flex items-center justify-center transition-all duration-300"},de,8,re)]))),256))]),_:1})])):y("",!0)]),_:1}),e("div",pe,[d(S,{"leave-active-class":"animate__animated animate__fadeOutLeft"},{default:k(()=>[(o(!0),t(m,null,v(i.value,(r,z)=>(o(),t("div",{key:r.name,class:"flex flex-col gap-2 justify-between"},[e("div",{class:"flex grow","data-aos":"fade-right","data-aos-delay":z*200},[d(Q,{project:r,selectedTags:l},null,8,["project","selectedTags"])],8,ue)]))),128))]),_:1})])],8,ne))}},he=["id"],me=e("h2",null,[e("span",{class:"letter-highlight"},"М"),u("ои навыки")],-1),fe={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-5"},_e=["data-aos-delay"],ve={class:"skill-card grow transition-all duration-500"},xe={class:"skill-card-header"},be={key:0,class:"skill-card-header-icon"},we={class:"skill-card-header-text text-ziggurat-600 font-petrov font-semibold"},ke=["innerHTML"],je={key:1,class:"flex flex-col gap-4"},$e=["data-aos-delay"],ze={class:"skill-subcard-header"},Te={key:0,class:"skill-subcard-body"},Se={__name:"SkillsSection",props:{sectionId:String},setup(s){const a=$("Мои навыки");return(l,i)=>(o(),t("section",{id:s.sectionId},[me,e("div",fe,[(o(!0),t(m,null,v(b(a).items,(n,c)=>(o(),t("div",{key:c,class:"flex"},[e("div",{class:"flex grow","data-aos":"zoom-in-right","data-aos-delay":c*200},[e("div",ve,[e("div",xe,[n.iconName?(o(),t("div",be,[e("i",{class:x(n.iconName)},null,2)])):y("",!0),e("div",we,h(n.title),1)]),n.description?(o(),t("p",{key:0,innerHTML:n.description,class:"skill-card-body"},null,8,ke)):y("",!0),n.items?(o(),t("div",je,[(o(!0),t(m,null,v(n.items,(f,p)=>(o(),t("div",{key:f.header,class:"skill-subcard","data-aos":"zoom-in-right","data-aos-delay":300+100*p},[e("div",ze,h(f.title),1),f.description?(o(),t("div",Te,h(f.description),1)):y("",!0)],8,$e))),128))])):y("",!0)])],8,_e)]))),128))])],8,he))}},Ce={props:["img","text"]},Le={class:"flex-col lg:flex-row items-center shadow-ziggurat-700 drop-shadow-xl flex border border-ziggurat-400 rounded-xl p-8 gap-8 bg-ziggurat-200 text-lg hover:drop-shadow-2xl transition-all duration-500 hover:border-ziggurat-600 hover:-translate-y-1"},Ne=["src"],Me=["innerHTML"];function Ee(s,a,l,i,n,c){return o(),t("div",Le,[e("img",{class:"md:max-w-80 lg:max-w-40 grow-0 rounded-md drop-shadow-xl shadow-ziggurat-400",src:l.img,alt:"Иллюстрация",loading:"lazy"},null,8,Ne),e("div",{class:"grow text-balance",innerHTML:l.text},null,8,Me)])}const He=H(Ce,[["render",Ee]]),Ie=["id"],Be=e("h2",null,[u("Кратко "),e("span",{class:"letter-highlight"},"о"),u("бо мне")],-1),Ae={class:"grid grid-cols-1 md:grid-cols-2 gap-5 2xl:grid-cols-3"},Oe=["data-aos-delay"],Pe={__name:"SummarySection",props:{sectionId:String},setup(s){const a=$("Кратко обо мне");return(l,i)=>(o(),t("section",{id:s.sectionId},[Be,e("div",Ae,[(o(!0),t(m,null,v(b(a).items,(n,c)=>(o(),t("div",{key:n,"data-aos":"zoom-in-right","data-aos-delay":c*300},[d(He,{img:n.img,text:n.text},null,8,["img","text"])],8,Oe))),128))])],8,Ie))}},qe=e("div",{class:"flex flex-col justify-center gap-6 my-20"},[e("h1",{class:"font-petrov"},[e("span",{class:"letter-highlight"},"П"),u("ривет, подписчики, я Евгений Дмитриевич ")]),e("div",{class:"text-center text-2xl text-ziggurat-500"},"Это мой сайт-визитка")],-1),Re={class:"flex flex-col gap-36"},Fe={__name:"AboutView",setup(s){return N(M("Обо мне")),E.init(),(a,l)=>(o(),t(m,null,[qe,e("div",Re,[d(Pe,{"section-id":b(j).summary.id,"data-aos-anchor-placement":"center-bottom"},null,8,["section-id"]),d(Se,{"section-id":b(j).skills.id,"data-aos-anchor-placement":"center-bottom"},null,8,["section-id"]),d(ye,{"section-id":b(j).projects.id,"data-aos-duration":"1000","data-aos-anchor-placement":"center-bottom"},null,8,["section-id"])])],64))}};export{Fe as default};
