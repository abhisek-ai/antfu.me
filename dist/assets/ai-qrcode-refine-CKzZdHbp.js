import{u as s,_ as r}from"./WrapperPost.vue_vue_type_script_setup_true_lang-C5gIlHGU.js";import{_ as l}from"./QRNotScannable-dEGiG8XN.js";import{a as h,_ as d,b as c}from"./ai-qrcode-refine-distort-result-BX7S3B9P.js";import{o as u,c as g,w as m,a as e,b as t,d as n}from"./app-D_zq0bHg.js";const p="/images/ai-qrcode-refine-5.jpg",f="/images/ai-qrcode-refine-generate-1.png",_="/images/ai-qrcode-refine-generate-2.png",b="/images/ai-qrcode-refine-4.jpg",w="/images/ai-qrcode-refine-compare-1.png",y="/images/ai-qrcode-refine-compare-3.png",k="/images/ai-qrcode-refine-compare-4.png",R="/images/ai-qrcode-refine-final.jpg",C="/images/ai-qrcode-refine-compare-final-1.png",q="/images/ai-qrcode-refine-compare-final-2.png",Q="/images/ai-qrcode-refine-qrbft.png",I="/images/ai-qrcode-refine-plus-sign.png",v="/images/ai-qrcode-refine-no-anchor.png",S="/images/ai-qrcode-refine-distort-1.png",x="/images/ai-qrcode-refine-distort-2.png",T={class:"prose m-auto slide-enter-content"},A=e("p",null,[e("div",{class:"table-of-contents"},[e("div",{class:"table-of-contents-anchor"},[e("div",{class:"i-ri-menu-2-fill"})]),e("ul",null,[e("li",null,[e("a",{href:"#generating-the-base-qr-code"},"Generating the Base QR Code ")]),e("li",null,[e("a",{href:"#generating-the-images"},"Generating the Images ")]),e("li",null,[e("a",{href:"#verify-and-refine-the-qr-code"},"Verify and Refine the QR Code ")]),e("li",null,[e("a",{href:"#final"},"Final ")]),e("li",null,[e("a",{href:"#hide-the-markers"},"Hide the Markers ")]),e("li",null,[e("a",{href:"#bonus-tip-distort-the-qr"},"Bonus Tip: Distort the QR ")]),e("li",null,[e("a",{href:"#conclusion"},"Conclusion ")])])])],-1),G=e("blockquote",null,[e("p",null,[e("strong",null,"Update"),t(": New blog posts - "),e("a",{href:"/posts/ai-qrcode-101"},[e("strong",null,"Stable Diffusion QR Code 101")])])],-1),P=e("p",null,[t("Last week, I wrote a "),e("a",{href:"/posts/ai-qrcode"},"blog post"),t(" about how I learned to generate scannable QR Codes. When doing so, I consider my goal is to find an image that looks like a QR Code as little as possible to humans, but still be recognizable by the machine.")],-1),B=e("p",null,"We need to find a balance, tweaking the weights to try and error. It’s still quite hard to find a good composition that represents the black & white spots, while keeping the content meaningful to human. If you go too far, the QR Code will be unscannable, and if you don’t go far enough, the image will just be like a boring QR Code.",-1),N=e("p",null,[t("Since there is quite some randomness in the process, sometimes it could be a pity when you find a good one but realize it’s not scannable. To improve this, my workflow was to open up Photoshop, overlay the generated image with the original QR Code, manually check the difference, use the brush to mark those spots and send to "),e("strong",null,"inpaint"),t(" to draw those areas. It works to some extent, but pretty inefficient as you need to go back and forth quite a few times. Meanwhile, doing this manually can also be inaccurate as the scanning algorithm might see them differently.")],-1),W=e("p",null,[e("img",{src:p,alt:"Steps from QR Code to final image"})],-1),j=e("p",null,"So, I need to find a way to automate this, helping me to verify and refine the generated QR Code easier. And I came up with a simple web tool to do so. Let me introduce you to a bit about it.",-1),H=e("div",{"i-ri-arrow-right-line":""},null,-1),z=e("a",{href:"https://qrcode.antfu.me/",target:"_blank"},"Anthony's QR Code Toolkit",-1),D=e("h2",{id:"generating-the-base-qr-code",tabindex:"-1"},[t("Generating the Base QR Code "),e("a",{class:"header-anchor",href:"#generating-the-base-qr-code","aria-hidden":"true"},"#")],-1),F=e("p",null,"One thing I found quite important is that the generated QR Code we put in the ControlNet affects the image quite a lot. The basic square QR Code will lead to a more square-ish and blocky image. It’s worth to try with dots, rounded, or other styled QR Codes to see if they can help to generate a better image.",-1),M=e("p",null,[e("img",{src:h,alt:"Comparison grid between different styled QR Code as input"})],-1),V=e("p",null,"The images above are generated with the exactly same parameters, and the same seed, except the QR Code inputs has slightly different on the styles. You can see the difference is quite significant.",-1),Y=e("p",null,[t("In addition, since the distribution of QR Codes is directly affecting the image’s composition. Sometimes we might find some patterns might be hard to work around. We would need to find different versions of the QR Code to find a better fit to the image we want. If you are familiar with QR Code enough, you might know there is a step in QR Code generated called "),e("a",{href:"https://en.wikipedia.org/wiki/QR_code#Encoding",target:"_blank",rel:"noopener"},"Mask Pattern"),t(". There are in total 8 different kind of patterns can apply to the QR Code that serves the same content. Sadly, most of the generators do not provide the capability to change it. Ok, I’ll build it.")],-1),L=e("p",null,[t("So specifically for this need, I built a QR generator based on "),e("a",{href:"https://www.nayuki.io/page/qr-code-generator-library",target:"_blank",rel:"noopener"},"QR Code Generator Library"),t(":")],-1),E=e("p",null,[e("img",{src:f,alt:"QR Code Generator"})],-1),O=e("p",null,[t("It offers me the full capability of the generation process. You can change the error correction level, mask pattern, version of the QR Code, and rotation to "),e("strong",null,"find"),t(" a good distribution of the black & white spots. Also, it allows you to change the styles of the dots, or add some random noise to the border making the generated image more blended-in.")],-1),U=e("p",null,[e("img",{src:_,alt:"QR Code Generator with Custom Styles"})],-1),J=e("h2",{id:"generating-the-images",tabindex:"-1"},[t("Generating the Images "),e("a",{class:"header-anchor",href:"#generating-the-images","aria-hidden":"true"},"#")],-1),Z=e("p",null,[t("Now we have the QR Code, we could move up to generate those images with Stable Diffusion and ControlNet. For detailed steps, please refer to "),e("a",{href:"/posts/ai-qrcode"},"my previous blog post"),t(".")],-1),$=e("h2",{id:"verify-and-refine-the-qr-code",tabindex:"-1"},[t("Verify and Refine the QR Code "),e("a",{class:"header-anchor",href:"#verify-and-refine-the-qr-code","aria-hidden":"true"},"#")],-1),K=e("p",null,"Running overnight, I now got like 200 images generated. Say I find one quite interesting and see some potential of being a good one. I will first use my phone to try to scan it. As mentioned earlier, you may not get lucky every time. This one is unfortunately not scannable.",-1),X=e("p",{align:"center"},[e("img",{src:b,class:"max-w-120!",alt:"Picked one, right from the model"})],-1),ee=e("p",null,"From a glance, we see there are quite some QR Code-ish spots in this image, which should make it recognizable by the scanner. But why not? Let’s find out why:",-1),te=e("p",null,[t("Using the "),e("strong",null,"Compare"),t(" tab of the "),e("a",{href:"https://qrcode.antfu.me/",target:"_blank",rel:"noopener"},"toolkit"),t(", upload both the generated image and the original QR Code, tweak the grid size, and then we could see the mismatched spots and inspect the nodes.")],-1),oe=e("p",null,[e("img",{src:w,alt:""})],-1),ne=e("p",null,[t("We can see that the image is not scannable because we have quite a lot of mismatches, saying that some parts of the image might not have enough contrast. Hover on the "),e("strong",null,"Highlight Mismatch"),t(" button, we can see the mismatched spots highlighted:")],-1),ie=e("p",null,[e("img",{src:d,alt:""})],-1),ae=e("p",null,"It seems the top half part of the image is a bit too dark and makes the scanner hard to distinguish. We can also try to increase the image contrast to see how it would look like in the scanner:",-1),se=e("p",null,[e("img",{src:y,alt:""})],-1),re=e("p",null,[t("Now it’s quite clear what’s the problem. Then how can we fix it? You can then try to hover on the "),e("strong",null,"Preview Corrected"),t(" button, to see what needs to be changed:")],-1),le=e("p",null,[e("img",{src:k,alt:""})],-1),he=e("p",null,[t("It will lighten the spots that are too dark, and darken the spots that are too bright. Then you see this image immediately "),e("strong",null,"becomes scannable"),t(" now!")],-1),de=e("p",null,[t("It’s great but definitely not the final result we would end up with. We can download the correction overlay, or the mask from the toolkit, to use them on "),e("strong",null,"inpaint"),t(" or fine-grained adjustment in Photoshop.")],-1),ce=e("h2",{id:"final",tabindex:"-1"},[t("Final "),e("a",{class:"header-anchor",href:"#final","aria-hidden":"true"},"#")],-1),ue=e("p",null,"After a few rounds of inpainting and adjustment, upscale to improve details, and now we have the final image as:",-1),ge=e("p",{align:"center"},[e("img",{src:R,class:"max-w-120!",alt:"Final result"})],-1),me=e("p",null,"Put it back to the toolkit, we see that the mismatched spots are now reduced a lot! Some of the mismatches are actually made on purpose, since QR Code has the error correction capability allowing that.",-1),pe=e("p",null,[e("img",{src:C,alt:"Tge final result in the toolkit"})],-1),fe=e("p",null,"In case you are interested, here you can see what it looks like when overlaid with the original QR Code:",-1),_e=e("p",null,[e("img",{src:q,alt:"The final result with the original QR Code overlayed on top"})],-1),be=e("p",null,"It’s quite interesting to see how the QR Code is been distorted and blended as different parts of the image.",-1),we=e("h2",{id:"hide-the-markers",tabindex:"-1"},[t("Hide the Markers "),e("a",{class:"header-anchor",href:"#hide-the-markers","aria-hidden":"true"},"#")],-1),ye=e("p",null,[t("The current result is already surprisingly good to me. The only thing that is missing probably is that the position makers do not blend very well, but I guess that’s kinda the limitation. When I was about to call it a day and go to bed, thinking about the possibility of making the QR Code makers less obvious, I saw in "),e("a",{href:"https://classic.qrbtf.com/",target:"_blank",rel:"noopener"},"classic.qrbtf.com"),t(' (created by the creator that came up with the AI QR Code idea), there is a style call SP-1 that has a "Plus shape" style of the position markers. It looks much less artificial than the squared or double-circle ones. I didn’t know it would also work for the scanner, so I think it might be worth a try.')],-1),ke=e("p",null,[e("img",{src:Q,alt:"Styles in classic.qrbtf.com"})],-1),Re=e("p",null,"So I implemented it in my generator, and it looks like this:",-1),Ce=e("p",null,[e("img",{src:I,alt:"QR Code generator with plus sign shaped markers"})],-1),qe=e("p",null,"As you can see, the marker looks much less distinguishable from the other data points (be aware it also make the code less scannable). It might be worth trying as the control net input to see if it can generate better images. But since we already have a pretty good one, let’s use the new QR Code to redraw the markers.",-1),Qe=e("p",null,[t("So doing the inpainting process again using the new QR Code, and a few more editing, we have the "),e("strong",null,"final result"),t(" as:")],-1),Ie=e("p",{align:"center"},[e("img",{src:v,class:"max-w-120!",alt:"Final result"})],-1),ve=e("p",null,"Even though I made it step by step, it’s still mind-blowing to see the final result looks like this but still scannable! 🤯",-1),Se=e("p",null,[e("a",{href:"https://civitai.com/images/1350374",target:"_blank",rel:"noopener"},"Check it on Civital")],-1),xe=e("h2",{id:"bonus-tip-distort-the-qr",tabindex:"-1"},[t("Bonus Tip: Distort the QR "),e("a",{class:"header-anchor",href:"#bonus-tip-distort-the-qr","aria-hidden":"true"},"#")],-1),Te=e("p",null,"Since we found the QR Code input affects the output image quite significantly. In another way of thinking, instead of refining the generated image in the post, maybe we can also try to manipulate the QR Code itself before sending it to the model.",-1),Ae=e("p",null,"For example, we could use the generator to try different patterns and configurations, to generate a better distribution of the data points. Adding some noise in the margin, making the position makers more randomized, and rounding up the hard edges to reduce the blocky feeling. We could have:",-1),Ge=e("p",null,[e("img",{src:S,alt:""})],-1),Pe=e("p",null,[t("Then I started to think about what more we could do. So I tried to play filter effects in Photoshop. I found that the "),e("code",null,"Distort > Ripple"),t(" and "),e("code",null,"Pixelate > Crystallize"),t(" filters have quite a balanced distortion effect. So I reimplemented the "),e("strong",null,"crystallize"),t(" effect in the toolkit, and we have:")],-1),Be=e("p",null,[e("img",{src:x,alt:""})],-1),Ne=e("p",null,"This further blurs the distinction between data points in human eyes. Sending it to the model, we get surprisingly very good results! Here is one of the examples:",-1),We=e("p",{align:"center"},[e("img",{src:c,class:"max-w-120!",alt:"Distorted QR Code"})],-1),je=e("p",null,'Since input has much more soft edges with some shades, it makes the model being able to "guess" with items with more freedom. Hope you’ll find this tip useful! I will try to implement more useful effects in the toolkit as we go.',-1),He=e("h2",{id:"conclusion",tabindex:"-1"},[t("Conclusion "),e("a",{class:"header-anchor",href:"#conclusion","aria-hidden":"true"},"#")],-1),ze=e("p",null,"I hope you enjoy the walkthrough. If you just started doing AI QR Code, give a try to the tool and let me know if it helps. You can find the app and the source code below.",-1),De=e("div",{"i-ri-qr-code-line":""},null,-1),Fe=e("a",{href:"https://qrcode.antfu.me/",target:"_blank"},"Anthony's QR Code Toolkit",-1),Me=e("br",null,null,-1),Ve=e("div",{"i-ri-github-fill":""},null,-1),Ye=e("a",{href:"https://github.com/antfu/qrcode-toolkit",target:"_blank","font-mono":""},"antfu/qrcode-toolkit",-1),Le=e("p",null,[t("Join my "),e("a",{href:"https://chat.antfu.me",target:"_blank",rel:"noopener"},[e("span",{op75:"","i-simple-icons-discord":""}),t(" Discord Server")]),t(", share what you are working on, and let’s explore more together!")],-1),Ee=e("p",null,[t("If you are interested in how I make such tools, I’d recommend continuing reading "),e("a",{href:"/posts/about-yak-shaving"},"About Yak Shaving"),t(" to learn the philosophy I follow when building tools. And if you like my work, consider sponsoring on "),e("a",{href:"https://github.com/sponsors/antfu",target:"_blank",rel:"noopener"},[e("span",{"i-carbon-favorite":""}),t(" GitHub Sponsor")]),t(" to support me in coming up with more ideas and tools.")],-1),Oe=e("p",null,"Thank you and happy hacking!",-1),ot={__name:"ai-qrcode-refine",setup(Ue){const i={title:"Refining AI Generated QR Code",date:"2023-06-30T17:00:00.000Z",lang:"en",duration:"16min",image:"https://antfu.me/og/ai-qrcode-refine.png",meta:[{property:"og:title",content:"Refining AI Generated QR Code"},{name:"twitter:title",content:"Refining AI Generated QR Code"},{property:"og:image",content:"https://antfu.me/og/ai-qrcode-refine.png"},{name:"twitter:image",content:"https://antfu.me/og/ai-qrcode-refine.png"},{name:"twitter:card",content:"summary_large_image"}]};return s({title:"Refining AI Generated QR Code",meta:[{property:"og:title",content:"Refining AI Generated QR Code"},{name:"twitter:title",content:"Refining AI Generated QR Code"},{property:"og:image",content:"https://antfu.me/og/ai-qrcode-refine.png"},{name:"twitter:image",content:"https://antfu.me/og/ai-qrcode-refine.png"},{name:"twitter:card",content:"summary_large_image"}]}),(Ze,$e)=>{const o=l,a=r;return u(),g(a,{frontmatter:i},{default:m(()=>[e("div",T,[A,G,P,B,N,W,j,H,t(),z,D,F,M,V,Y,L,E,O,U,J,Z,$,K,X,ee,te,oe,ne,ie,ae,se,re,le,he,de,ce,ue,ge,n(o,{"mt--2":""}),me,pe,fe,_e,be,we,ye,ke,Re,Ce,qe,Qe,Ie,n(o,{"mt--2":""}),ve,Se,xe,Te,Ae,Ge,Pe,Be,Ne,We,n(o,{"mt--2":""}),je,He,ze,De,t(),Fe,Me,Ve,t(),Ye,Le,Ee,Oe])]),_:1})}}};export{ot as default};
