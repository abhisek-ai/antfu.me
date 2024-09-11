import{u as l,_ as r}from"./WrapperPost.vue_vue_type_script_setup_true_lang-C5gIlHGU.js";import{o as n,c as i,w as h,a as s,b as t}from"./app-D_zq0bHg.js";const p=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,"When you need to detect if a string contains Chinese characters, you would commonly think about doing it will RegExp, or grab a ready-to-use package on npm."),s("p",null,[t("If you Google it, you are likely end up with "),s("a",{href:"https://stackoverflow.com/a/21113538",target:"_blank",rel:"noopener"},"this solution"),t(":")]),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"/"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"["),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\u4E00-\\u9FCC\\u3400-\\u4DB5\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"|"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"["),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uD840-\\uD868"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]["),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uDC00-\\uDFFF"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"|"),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uD869"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"["),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uDC00-\\uDED6\\uDF00-\\uDFFF"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"|"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"["),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uD86A-\\uD86C"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]["),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uDC00-\\uDFFF"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"|"),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uD86D"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"["),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uDC00-\\uDF34\\uDF40-\\uDFFF"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"|"),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uD86E"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"["),s("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}},"\\uDC00-\\uDC1D"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"/")])])]),s("p",null,[t("It works, but a bit dirty. Fortunately, I found "),s("a",{href:"https://stackoverflow.com/a/61151122",target:"_blank",rel:"noopener"},"a much simpler solution"),t(" today:")]),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"/"),s("span",{style:{"--s-dark":"#E6CC77","--s-light":"#BDA437"}},"\\p"),s("span",{style:{"--s-dark":"#C4704F","--s-light":"#AB5E3F"}},"{Script=Han}"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"/"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"u")])])]),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"!!"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"你好"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"'"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"."),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"match"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"/"),s("span",{style:{"--s-dark":"#E6CC77","--s-light":"#BDA437"}},"\\p"),s("span",{style:{"--s-dark":"#C4704F","--s-light":"#AB5E3F"}},"{Script=Han}"),s("span",{style:{"--s-dark":"#C98A7D77","--s-light":"#B5695977"}},"/"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"u"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")"),s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}}," // true")])])]),s("p",null,[t("It’s called "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes",target:"_blank",rel:"noopener"},"Unicode property escapes"),t(" and already available in "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#browser_compatibility",target:"_blank",rel:"noopener"},"Chrome 64, Firefox 79, Safari 11.1 and Node.js 10"),t(".")]),s("p",null,[s("a",{href:"https://www.regular-expressions.info/unicode.html",target:"_blank",rel:"noopener"},"All available scripts here"),t(".")])],-1),y={__name:"match-chinese-characters",setup(o){const e={title:"Match Chinese Characters",date:"2021-02-25T16:00:00.000Z",lang:"en",duration:"2min",type:"note",image:"https://antfu.me/og/match-chinese-characters.png",meta:[{property:"og:title",content:"Match Chinese Characters"},{name:"twitter:title",content:"Match Chinese Characters"},{property:"og:image",content:"https://antfu.me/og/match-chinese-characters.png"},{name:"twitter:image",content:"https://antfu.me/og/match-chinese-characters.png"},{name:"twitter:card",content:"summary_large_image"}]};return l({title:"Match Chinese Characters",meta:[{property:"og:title",content:"Match Chinese Characters"},{name:"twitter:title",content:"Match Chinese Characters"},{property:"og:image",content:"https://antfu.me/og/match-chinese-characters.png"},{name:"twitter:image",content:"https://antfu.me/og/match-chinese-characters.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,c)=>{const a=r;return n(),i(a,{frontmatter:e},{default:h(()=>[p]),_:1})}}};export{y as default};
