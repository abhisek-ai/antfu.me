import{u as n,_ as l}from"./WrapperPost.vue_vue_type_script_setup_true_lang-C5gIlHGU.js";import{o as i,c as r,w as p,a as s,b as t}from"./app-D_zq0bHg.js";const d=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,[t("I didn’t know that you can type "),s("code",null,"provide()"),t(" and "),s("code",null,"inject()"),t(" elegantly until I watched "),s("a",{href:"https://github.com/LinusBorg/",target:"_blank",rel:"noopener"},"Thorsten Lünborg"),t("’s talk on "),s("a",{href:"https://vuejs.amsterdam/",target:"_blank",rel:"noopener"},"Vue Amsterdam"),t(".")]),s("p",null,[t("The basic idea here is the Vue offers a type utility "),s("code",null,"InjectionKey"),t(" will you can type a Symbol to hold the type of your injection values. And when you use "),s("code",null,"provide()"),t(" and "),s("code",null,"inject()"),t(" with that symbol, it can infer the type of provider and return value automatically.")]),s("p",null,"For example:"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"// context.ts")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," type"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," InjectionKey"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"vue"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"export"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," interface"),s("span",{style:{"--s-dark":"#5DA994","--s-light":"#2E8F82"}}," UserInfo"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"  id"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},": "),s("span",{style:{"--s-dark":"#5DA994","--s-light":"#2E8F82"}},"number")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"  name"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},": "),s("span",{style:{"--s-dark":"#5DA994","--s-light":"#2E8F82"}},"string")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"}")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"export"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," const "),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"InjectKeyUser"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},": "),s("span",{style:{"--s-dark":"#5DA994","--s-light":"#2E8F82"}},"InjectionKey"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"<"),s("span",{style:{"--s-dark":"#5DA994","--s-light":"#2E8F82"}},"UserInfo"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"> ="),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}}," Symbol"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"()")])])]),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"// parent.vue")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," provide"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"vue"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," InjectKeyUser"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"./context"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"export"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," default"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"  setup"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"() {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"    provide"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"InjectKeyUser"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},", {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}},"      id"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},": "),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"117"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},", "),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"// type error: should be number")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}},"      name"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},": "),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"Anthony"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"    })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"  },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"}")])])]),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"// child.vue")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," inject"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"vue"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," InjectKeyUser"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"./context"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"export"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," default"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"  setup"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"() {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"    const "),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"user"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}}," inject"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"InjectKeyUser"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")"),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}}," // UserInfo | undefined")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"    if"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ("),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"user"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"      console"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"."),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"log"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"user"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"."),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"name"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},") "),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"// Anthony")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"  },")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"}")])])]),s("p",null,[t("See "),s("a",{href:"https://v3.vuejs.org/api/composition-api.html#provide-inject",target:"_blank",rel:"noopener"},"the docs"),t(" for more details.")])],-1),D={__name:"typed-provide-and-inject-in-vue",setup(g){const e={title:"Typed Provide and Inject in Vue",date:"2021-03-05T16:00:00.000Z",lang:"en",duration:"8min",image:"https://antfu.me/og/typed-provide-and-inject-in-vue.png",meta:[{property:"og:title",content:"Typed Provide and Inject in Vue"},{name:"twitter:title",content:"Typed Provide and Inject in Vue"},{property:"og:image",content:"https://antfu.me/og/typed-provide-and-inject-in-vue.png"},{name:"twitter:image",content:"https://antfu.me/og/typed-provide-and-inject-in-vue.png"},{name:"twitter:card",content:"summary_large_image"}]};return n({title:"Typed Provide and Inject in Vue",meta:[{property:"og:title",content:"Typed Provide and Inject in Vue"},{name:"twitter:title",content:"Typed Provide and Inject in Vue"},{property:"og:image",content:"https://antfu.me/og/typed-provide-and-inject-in-vue.png"},{name:"twitter:image",content:"https://antfu.me/og/typed-provide-and-inject-in-vue.png"},{name:"twitter:card",content:"summary_large_image"}]}),(y,o)=>{const a=l;return i(),r(a,{frontmatter:e},{default:p(()=>[d]),_:1})}}};export{D as default};
