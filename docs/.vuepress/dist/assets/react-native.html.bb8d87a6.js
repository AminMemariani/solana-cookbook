import{_ as p,r as o,o as c,c as l,a as n,b as e,F as r,e as t,d as a}from"./app.f70ed2c6.js";const i={},u=t(`<h1 id="react-native-et-solana" tabindex="-1"><a class="header-anchor" href="#react-native-et-solana" aria-hidden="true">#</a> React Native et Solana</h1><p>React Native est un framework UI open-source utilis\xE9 pour d\xE9velopper des applications mobiles, web et de bureau permettant aux d\xE9veloppeurs d&#39;utiliser le framework React avec les fonctionnalit\xE9s natives de ces plateformes. Gr\xE2ce \xE0 Solana SDK, il s&#39;agit d&#39;une excellente plateforme pour cr\xE9er rapidement des applications Crypto natives performantes.</p><p>La fa\xE7on la plus rapide de commencer avec React Native et Solana est d&#39;utiliser le <a href="#solana-dapp-scaffold-for-react-native">Solana DApp Scaffold for React Native</a>.</p><h2 id="comment-utiliser-solana-web3-js-dans-une-application-react-native" tabindex="-1"><a class="header-anchor" href="#comment-utiliser-solana-web3-js-dans-une-application-react-native" aria-hidden="true">#</a> Comment utiliser @solana/web3.js dans une application React Native</h2><p>Dans ce tutoriel, vous apprendrez \xE0 cr\xE9er une nouvelle application React Native et \xE0 installer et configurer le SDK <code>@solana/web3.js</code>, ainsi que ses d\xE9pendances.</p><p>Si vous avez d\xE9j\xE0 une application existante, passez directement \xE0 l&#39;<a href="#installer-les-d%C3%A9pendances">installation des d\xE9pendances</a>.</p><h3 id="creer-une-nouvelle-application" tabindex="-1"><a class="header-anchor" href="#creer-une-nouvelle-application" aria-hidden="true">#</a> Cr\xE9er une nouvelle application</h3><p>Nous d\xE9marrons une nouvelle application React Native qui utilise TypeScript, puis ex\xE9cutons la commande <code>cd</code> vers le r\xE9pertoire du projet o\xF9 nous allons ex\xE9cuter le reste des commandes.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx react-native@0.70.0 init SolanaReactNative --template react-native-template-typescript
<span class="token builtin class-name">cd</span> SolanaReactNative
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="installer-les-dependances" tabindex="-1"><a class="header-anchor" href="#installer-les-dependances" aria-hidden="true">#</a> Installer les d\xE9pendances</h3><p>Ensuite, nous installons les d\xE9pendances. \xC0 savoir, le SDK JavaScript de Solana, un paquet pour corriger le syst\xE8me de compilation de React Native (Metro), un g\xE9n\xE9rateur de nombres al\xE9atoires s\xE9curis\xE9, et un correctif pour corriger la classe <code>URL</code> manquante de React Native.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">\\</span>
  @solana/web3.js <span class="token punctuation">\\</span>
  react-native-get-random-values <span class="token punctuation">\\</span>
  react-native-url-polyfill
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="corriger-babel-pour-utiliser-les-transformations-hermes" tabindex="-1"><a class="header-anchor" href="#corriger-babel-pour-utiliser-les-transformations-hermes" aria-hidden="true">#</a> Corriger Babel pour utiliser les transformations Hermes</h3><p>Depuis ao\xFBt 2022, le template \xE0 partir duquel les nouvelles applications React Native sont r\xE9alis\xE9es active par d\xE9faut le moteur JavaScript Hermes mais pas les transformations de code Hermes. Activez-les en apportant la modification suivante \xE0 <code>babel.config.js</code> :</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   presets: [&#39;module:metro-react-native-babel-preset&#39;],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   presets: [
</span><span class="token prefix inserted">+</span><span class="token line">     [
</span><span class="token prefix inserted">+</span><span class="token line">       &#39;module:metro-react-native-babel-preset&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">       {unstable_transformProfile: &#39;hermes-stable&#39;},
</span><span class="token prefix inserted">+</span><span class="token line">     ],
</span><span class="token prefix inserted">+</span><span class="token line">   ],
</span></span>};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="mettre-a-jour-index-js" tabindex="-1"><a class="header-anchor" href="#mettre-a-jour-index-js" aria-hidden="true">#</a> Mettre \xE0 jour <code>index.js</code></h3><p>Pour charger les polyfills, nous ouvrons le fichier <code>index.js</code> \xE0 la racine du projet et ajoutons les deux lignes suivantes au d\xE9but de celui-ci :</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;react-native-get-random-values&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;react-native-url-polyfill/auto&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="mettre-a-jour-app-tsx" tabindex="-1"><a class="header-anchor" href="#mettre-a-jour-app-tsx" aria-hidden="true">#</a> Mettre \xE0 jour <code>App.tsx</code></h3><p>Ajoutons un exemple de web3.js dans notre application !</p><p>Ouvrez le fichier <code>App.tsx</code> et ajoutez le code suivant \xE0 l&#39;int\xE9rieur de la fonction <code>App</code> :</p><p>Dans cet exemple, nous \xE9tablissons une connexion au Devnet de Solana. Lorsque les composants se chargent, nous r\xE9cup\xE9rons la version du cluster auquel nous nous sommes connect\xE9s et la stockons dans l&#39;\xE9tat du composant.</p><p>De plus, cet exemple montre comment g\xE9n\xE9rer et stocker une paire de cl\xE9s.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>keypair<span class="token punctuation">,</span> setKeypair<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Keypair<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">randomKeypair</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setKeypair</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>version<span class="token punctuation">,</span> setVersion<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&#39;devnet&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  conn<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setVersion</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Enfin, dans le mod\xE8le (ou <code>render function</code>), ajoutez le balisage suivant :</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token punctuation">{</span>version <span class="token operator">?</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Section</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Version<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>version<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Section</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>keypair <span class="token operator">?</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Section</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Keypair<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>keypair<span class="token operator">?.</span>publicKey<span class="token operator">?.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Section</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>New Keypair<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>randomKeypair<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="ios-uniquement-installer-cocoapods" tabindex="-1"><a class="header-anchor" href="#ios-uniquement-installer-cocoapods" aria-hidden="true">#</a> [iOS uniquement] Installer cocoapods</h3><p>Pour que nos polyfills soient autolink\xE9s sur iOS, nous devons installer <code>cocoapods</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ios <span class="token operator">&amp;&amp;</span> pod <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="demarrer-l-application" tabindex="-1"><a class="header-anchor" href="#demarrer-l-application" aria-hidden="true">#</a> D\xE9marrer l&#39;application</h3><p>Une fois que nous avons termin\xE9 tout ce qui pr\xE9c\xE8de, nous pouvons d\xE9marrer notre application dans le simulateur Android ou iOS.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> android
<span class="token function">yarn</span> ios
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Si tout s&#39;est bien pass\xE9, vous devriez voir d\xE9marrer dans votre simulateur une application React Native qui r\xE9cup\xE8re la version du Devnet de Solana.</p><h2 id="solana-dapp-scaffold-for-react-native" tabindex="-1"><a class="header-anchor" href="#solana-dapp-scaffold-for-react-native" aria-hidden="true">#</a> Solana DApp Scaffold for React Native</h2>`,34),d=a("Si vous souhaitez vous lancer dans l'aventure, vous pouvez t\xE9l\xE9charger l'application "),k={href:"https://github.com/solana-developers/dapp-scaffold-react-native",target:"_blank",rel:"noopener noreferrer"},m=a("Solana DApp Scaffold for React Native"),b=a("."),h=n("h2",{id:"problemes-courants-lors-de-l-utilisation-de-bibliotheques-crypto-dans-une-application-react-native",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#problemes-courants-lors-de-l-utilisation-de-bibliotheques-crypto-dans-une-application-react-native","aria-hidden":"true"},"#"),a(" Probl\xE8mes courants lors de l'utilisation de biblioth\xE8ques crypto dans une application React Native")],-1),v=n("h3",{id:"erreur-watchman-crawl-failed",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#erreur-watchman-crawl-failed","aria-hidden":"true"},"#"),a(" Erreur: "),n("code",null,"Watchman crawl failed")],-1),f=a("La partie du syst\xE8me de compilation qui surveille les changements dans votre syst\xE8me de fichiers s'appelle Watchman. Certaines versions de Mac OS "),g={href:"https://github.com/facebook/watchman/issues/751",target:"_blank",rel:"noopener noreferrer"},x=a("refusent"),y=a(" d'accorder au Watchman la permission de surveiller certains r\xE9pertoires, comme "),_=n("code",null,"~/Documents/",-1),S=a(" et "),j=n("code",null,"~/Desktop/",-1),R=a("."),q=a("Vous saurez que vous avez ce probl\xE8me si le bundler Metro produit "),w={href:"https://gist.github.com/steveluscher/d0ae13225b57bc59dc0eac871509dcd7",target:"_blank",rel:"noopener noreferrer"},N=a("une erreur"),z=a(" contenant les mots \u201CWatchman crawl failed.\u201D"),D=t(`<p>Pour r\xE9soudre ce probl\xE8me, d\xE9placez votre projet React Native \xE0 la racine de votre r\xE9pertoire utilisateur.</p><h3 id="erreur-url-protocol-is-not-implemented" tabindex="-1"><a class="header-anchor" href="#erreur-url-protocol-is-not-implemented" aria-hidden="true">#</a> Erreur: URL.protocol is not implemented</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ERROR Error: URL.protocol is not implemented
ERROR Invariant Violation: Module AppRegistry is not a registered callable module <span class="token punctuation">(</span>calling runApplication<span class="token punctuation">)</span>. A frequent cause of the error is that the application entry <span class="token function">file</span> path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Ce probl\xE8me peut \xEAtre r\xE9solu en utilisant un polyfill pour l&#39;objet <code>URL</code> dans React Native.</p><p>Installez le paquet <code>react-native-url-polyfill</code> et importez-le dans le fichier principal de votre application (ex : <code>index.js</code>), comme indiqu\xE9 ci-dessus.</p><h3 id="erreur-crypto-getrandomvalues-not-supported" tabindex="-1"><a class="header-anchor" href="#erreur-crypto-getrandomvalues-not-supported" aria-hidden="true">#</a> Erreur: crypto.getRandomValues() not supported</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Error: crypto.getRandomValues<span class="token punctuation">(</span><span class="token punctuation">)</span> not supported. See https://github.com/uuidjs/uuid<span class="token comment">#getrandomvalues-not-supported</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Ce probl\xE8me peut \xEAtre r\xE9solu en utilisant un polyfill pour l&#39;objet <code>crypto</code> dans React Native.</p><p>Installez le paquet <code>react-native-get-random-values</code> et importez-le dans le fichier principal de votre application (ex : <code>index.js</code>), comme indiqu\xE9 ci-dessus.</p>`,9);function A(E,K){const s=o("ExternalLinkIcon");return c(),l(r,null,[u,n("p",null,[d,n("a",k,[m,e(s)]),b]),h,v,n("p",null,[f,n("a",g,[x,e(s)]),y,_,S,j,R]),n("p",null,[q,n("a",w,[N,e(s)]),z]),D],64)}var C=p(i,[["render",A]]);export{C as default};