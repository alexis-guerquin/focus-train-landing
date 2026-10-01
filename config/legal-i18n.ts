import type { Locale } from "@/config/i18n";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  intro: string;
  toc?: string;
  sections: LegalSection[];
};

const privacy: Record<Locale, LegalDocument> = {
  en: {
    eyebrow: "Privacy",
    title: "Privacy policy",
    intro:
      "This policy describes how Focus Train processes data in its iOS and Android apps and on focus-train.fr. Processing varies by platform and by the features you use.",
    toc: "Contents",
    sections: [
      {
        title: "1. Overview",
        paragraphs: [
          "Focus Train is a gamified productivity app. Focus sessions move a train forward, unlock cities and collectibles, and can optionally take place with other travelers in multiplayer carriages.",
        ],
      },
      {
        title: "2. Data controller",
        paragraphs: [
          "Focus Train is operated from France under the developer account “Alexis Guerquin – Phenomenals”. Privacy requests can be sent to {email}.",
        ],
      },
      {
        title: "3. Data we collect",
        bullets: [
          "Account data: email address, Firebase user ID, sign-in provider, display name and onboarding preferences.",
          "Focus and progress data: session dates and duration, Pomodoro settings, routes, visited stops, distance, collections and rewards.",
          "Multiplayer data: display name, character, train, carriage, seat, presence, focus status, blocks and reports.",
          "Purchase and support data: product and entitlement status, transaction identifiers supplied by the stores, and information you choose to include in support requests.",
          "Website data: optional waitlist email, cookie preference and cookie-free Webful audience statistics.",
        ],
      },
      {
        title: "4. Purposes and legal bases",
        paragraphs: [
          "Data is used to provide and secure accounts, synchronize progress, run focus and multiplayer features, manage purchases, respond to support, prevent fraud and improve the service. The legal basis is performance of the service, legal obligations, consent or Focus Train’s legitimate interest, as applicable.",
        ],
      },
      {
        title: "5. Authentication",
        paragraphs: [
          "Firebase Authentication handles email, Google and, on iOS, Apple sign-in. Passwords are sent to Firebase for authentication and are not stored in Focus Train application databases.",
        ],
      },
      {
        title: "6. Local and remote storage",
        paragraphs: [
          "Account, progress, collection, session and moderation data is stored with Firebase services. Devices also keep the session, offline caches and app preferences needed to operate and resume journeys. iOS uses SwiftData and an App Group; Android keeps private app files and disables backup and device transfer for that data.",
        ],
      },
      {
        title: "7. Third-party services",
        bullets: [
          "Google/Firebase: authentication, databases, cloud functions and Android analytics.",
          "Google Sign-In and Sign in with Apple: account authentication.",
          "Apple StoreKit, Google Play and RevenueCat: purchases, restoration and subscription status.",
          "MapLibre/OpenFreeMap and public railway data: maps and live route information.",
          "Webful: cookie-free website audience measurement hosted in France according to the provider.",
        ],
      },
      {
        title: "8. Firebase and Google services",
        paragraphs: [
          "The Firebase project is focus-train-74550. Android uses Authentication, Firestore, Realtime Database, Cloud Functions and Analytics. iOS uses the same services except Analytics. Crashlytics is not integrated, and the reviewed clients do not upload user files to Firebase Storage.",
        ],
      },
      {
        title: "9. Purchases and subscriptions",
        paragraphs: [
          "Apple processes iOS payments through StoreKit. Google Play and RevenueCat process Android purchases and entitlements. Focus Train does not receive full payment-card data. Deleting an account does not cancel a store subscription; subscriptions must be managed in the relevant store account.",
        ],
      },
      {
        title: "10. Analytics, diagnostics and logs",
        paragraphs: [
          "Firebase Analytics is present on Android only; advertising identifiers and ad-personalization signals are disabled. Apps and Cloud Functions create technical logs to diagnose errors and secure sensitive operations. The website uses Webful for cookie-free audience and performance statistics.",
        ],
      },
      {
        title: "11. Notifications",
        paragraphs: [
          "With your permission, Focus Train uses local notifications for focus reminders, Pomodoro breaks, iOS Live Activities and widgets, and the Android foreground audio service. No Firebase Cloud Messaging integration or push token registration was found in the reviewed code.",
        ],
      },
      {
        title: "12. Sharing",
        paragraphs: [
          "Data is shared only with providers needed for the features described above. Travelers in the same multiplayer carriage can see your display name, character, displayed progress, seat and focus status. Focus Train does not sell personal data or use it for cross-app advertising.",
        ],
      },
      {
        title: "13. Retention",
        paragraphs: [
          "Account data is kept while the account is active or until deletion. Multiplayer presence and seat locks are temporary. Local data remains until replaced, cleared or the app is removed. Stores and providers may apply their own legal retention periods. The website preference cookie expires after six months.",
        ],
      },
      {
        title: "14. Security",
        paragraphs: [
          "Network communications use HTTPS/TLS. Firebase authentication, access rules and server functions protect sensitive operations. Private Android data is excluded from backup and device transfer. No system can guarantee absolute security.",
        ],
      },
      {
        title: "15. Account and data deletion",
        paragraphs: [
          "A signed-in user can choose Settings → Account → Delete my account. The server removes the profile, progress, collections, sessions, subscription associations, reports, blocks, multiplayer presence and private account files before removing the Firebase identity. Shared rooms containing other travelers’ data are retained with the creator link anonymized.",
          "After server confirmation, the apps clear local session data and app caches. If the in-app option is unavailable, contact {email}; identity verification may be required.",
        ],
      },
      {
        title: "16. Your rights",
        paragraphs: [
          "Under the GDPR, where applicable, you may request access, correction, deletion, restriction, objection and portability, and withdraw consent for the future. Send requests to {email}. You may also contact the CNIL, the French data-protection authority.",
        ],
      },
      {
        title: "17. Minors",
        paragraphs: [
          "Onboarding can record an under-18 age range, but Focus Train is not presented as a service specifically for children. A parent or guardian may contact us if they believe a minor supplied data inappropriately.",
        ],
      },
      {
        title: "18. International transfers",
        paragraphs: [
          "Some providers may process data outside the European Economic Area. These transfers rely on the safeguards applicable to the relevant service, such as adequacy decisions or standard contractual clauses. Webful states that its service is hosted in France.",
        ],
      },
      {
        title: "19. Changes to this policy",
        paragraphs: [
          "This policy may change as the app, providers or regulations evolve. The date shown at the top identifies the current version, and additional notice will be provided when the nature of a change requires it.",
        ],
      },
      {
        title: "20. Contact",
        paragraphs: ["For any privacy question or request, contact {email}."],
      },
    ],
  },
  fr: {
    eyebrow: "Vie privée",
    title: "Politique de confidentialité",
    intro:
      "Cette politique décrit le traitement des données dans les apps iOS et Android de Focus Train ainsi que sur focus-train.fr. Les traitements varient selon la plateforme et les fonctions utilisées.",
    toc: "Sommaire",
    sections: [
      {
        title: "1. Présentation",
        paragraphs: [
          "Focus Train est une application de productivité gamifiée. Les sessions font progresser un train, débloquent villes et collections et peuvent se dérouler avec d’autres voyageurs en multijoueur.",
        ],
      },
      {
        title: "2. Responsable du traitement",
        paragraphs: [
          "Focus Train est édité depuis la France sous le compte développeur « Alexis Guerquin – Phenomenals ». Les demandes relatives à la vie privée peuvent être envoyées à {email}.",
        ],
      },
      {
        title: "3. Données collectées",
        bullets: [
          "Compte : e-mail, identifiant Firebase, fournisseur de connexion, pseudonyme et préférences d’onboarding.",
          "Concentration et progression : dates, durées, réglages Pomodoro, trajets, arrêts, distance, collections et récompenses.",
          "Multijoueur : pseudonyme, personnage, train, wagon, place, présence, statut, blocages et signalements.",
          "Achats et support : produit, droit premium, identifiants transmis par les stores et informations fournies au support.",
          "Site : e-mail de liste d’attente facultatif, préférence cookies et statistiques Webful sans cookie.",
        ],
      },
      {
        title: "4. Finalités et bases légales",
        paragraphs: [
          "Les données servent à fournir et sécuriser le compte, synchroniser la progression, faire fonctionner les sessions et le multijoueur, gérer les achats, répondre au support, prévenir la fraude et améliorer le service. Les bases sont l’exécution du service, l’obligation légale, le consentement ou l’intérêt légitime selon le traitement.",
        ],
      },
      {
        title: "5. Authentification",
        paragraphs: [
          "Firebase Authentication gère la connexion par e-mail, Google et, sur iOS, Apple. Les mots de passe sont transmis à Firebase et ne sont pas stockés dans les bases applicatives Focus Train.",
        ],
      },
      {
        title: "6. Stockage local et distant",
        paragraphs: [
          "Les données de compte, progression, collection, sessions et modération sont stockées dans Firebase. L’appareil conserve aussi session, caches et préférences. iOS utilise SwiftData et un App Group ; Android utilise des fichiers privés exclus de la sauvegarde et du transfert.",
        ],
      },
      {
        title: "7. Services tiers",
        bullets: [
          "Google/Firebase : authentification, bases, fonctions cloud et analytics Android.",
          "Google Sign-In et Sign in with Apple : connexion.",
          "Apple StoreKit, Google Play et RevenueCat : achats et abonnements.",
          "MapLibre/OpenFreeMap et données ferroviaires publiques : cartes et trajets.",
          "Webful : mesure d’audience du site sans cookie, hébergée en France selon le prestataire.",
        ],
      },
      {
        title: "8. Firebase et Google",
        paragraphs: [
          "Le projet Firebase est focus-train-74550. Android utilise Authentication, Firestore, Realtime Database, Cloud Functions et Analytics. iOS utilise les mêmes services sauf Analytics. Crashlytics n’est pas intégré et les clients examinés n’envoient pas de fichiers utilisateurs vers Firebase Storage.",
        ],
      },
      {
        title: "9. Achats et abonnements",
        paragraphs: [
          "Apple traite les paiements iOS avec StoreKit ; Google Play et RevenueCat gèrent Android. Focus Train ne reçoit pas les données complètes de carte bancaire. Supprimer le compte n’annule pas l’abonnement du store, qui doit être géré séparément.",
        ],
      },
      {
        title: "10. Analytics, diagnostics et logs",
        paragraphs: [
          "Firebase Analytics est présent uniquement sur Android ; les identifiants publicitaires et signaux de personnalisation sont désactivés. Les apps et fonctions cloud produisent des logs techniques. Le site utilise Webful pour des statistiques d’audience sans cookie.",
        ],
      },
      {
        title: "11. Notifications",
        paragraphs: [
          "Avec votre accord, Focus Train utilise des notifications locales pour les rappels, pauses Pomodoro, Live Activities et widgets iOS, ainsi que le service audio Android. Aucune intégration Firebase Cloud Messaging n’a été trouvée.",
        ],
      },
      {
        title: "12. Partage",
        paragraphs: [
          "Les données sont partagées uniquement avec les prestataires nécessaires. Dans un même wagon, les voyageurs voient pseudonyme, personnage, progression affichée, place et statut. Focus Train ne vend pas les données et ne fait pas de ciblage publicitaire inter-applications.",
        ],
      },
      {
        title: "13. Conservation",
        paragraphs: [
          "Les données de compte sont conservées tant que le compte est actif ou jusqu’à suppression. Présence et places multijoueur sont temporaires. Les données locales restent jusqu’à remplacement, nettoyage ou désinstallation. Les prestataires peuvent appliquer leurs obligations propres. Le cookie de préférence expire après six mois.",
        ],
      },
      {
        title: "14. Sécurité",
        paragraphs: [
          "Les communications utilisent HTTPS/TLS. Firebase, ses règles d’accès et les fonctions serveur protègent les opérations sensibles. Les données Android privées sont exclues des sauvegardes. Aucun système ne garantit une sécurité absolue.",
        ],
      },
      {
        title: "15. Suppression du compte et des données",
        paragraphs: [
          "Depuis Réglages → Compte → Supprimer mon compte, le serveur efface profil, progression, collections, sessions, associations d’abonnement, signalements, blocages, présences et fichiers privés avant l’identité Firebase. Les salles partagées sont conservées de façon anonymisée lorsqu’elles contiennent des données d’autres voyageurs.",
          "Après confirmation, les apps effacent aussi les données locales. Si l’option est inaccessible, contactez {email} ; une vérification d’identité peut être demandée.",
        ],
      },
      {
        title: "16. Vos droits",
        paragraphs: [
          "Dans le cadre du RGPD, vous pouvez demander accès, rectification, effacement, limitation, opposition et portabilité, et retirer votre consentement pour l’avenir. Écrivez à {email}. Vous pouvez aussi saisir la CNIL.",
        ],
      },
      {
        title: "17. Mineurs",
        paragraphs: [
          "L’onboarding permet d’indiquer moins de 18 ans, mais Focus Train n’est pas destiné spécifiquement aux enfants. Un parent ou représentant peut nous contacter s’il pense qu’un mineur a fourni des données de manière inappropriée.",
        ],
      },
      {
        title: "18. Transferts internationaux",
        paragraphs: [
          "Certains prestataires peuvent traiter des données hors Espace économique européen, avec les garanties applicables telles qu’une décision d’adéquation ou des clauses contractuelles types. Webful annonce un hébergement en France.",
        ],
      },
      {
        title: "19. Modifications",
        paragraphs: [
          "Cette politique peut évoluer avec l’app, les prestataires ou la réglementation. La date en haut indique la version en vigueur ; une information complémentaire sera fournie si nécessaire.",
        ],
      },
      {
        title: "20. Contact",
        paragraphs: [
          "Pour toute question ou demande relative à la vie privée : {email}.",
        ],
      },
    ],
  },
  es: {
    eyebrow: "Privacidad",
    title: "Política de privacidad",
    intro:
      "Esta política describe cómo Focus Train trata los datos en iOS, Android y focus-train.fr. El tratamiento depende de la plataforma y las funciones utilizadas.",
    toc: "Contenido",
    sections: [
      {
        title: "1. Presentación",
        paragraphs: [
          "Focus Train es una aplicación de productividad gamificada. Las sesiones mueven un tren, desbloquean ciudades y colecciones y pueden compartirse con otros viajeros.",
        ],
      },
      {
        title: "2. Responsable",
        paragraphs: [
          "Focus Train se gestiona desde Francia bajo la cuenta “Alexis Guerquin – Phenomenals”. Escribe a {email} para cuestiones de privacidad.",
        ],
      },
      {
        title: "3. Datos recopilados",
        bullets: [
          "Cuenta: correo, identificador Firebase, proveedor de acceso, alias y preferencias iniciales.",
          "Concentración: fechas, duración, Pomodoro, rutas, paradas, distancia, colecciones y recompensas.",
          "Multijugador: alias, personaje, tren, vagón, asiento, presencia, estado, bloqueos e informes.",
          "Compras y ayuda: producto, derecho premium, identificadores de tienda y datos enviados a soporte.",
          "Web: correo opcional de espera, preferencia de cookies y estadísticas Webful sin cookies.",
        ],
      },
      {
        title: "4. Fines y bases legales",
        paragraphs: [
          "Usamos los datos para prestar y proteger el servicio, sincronizar el progreso, gestionar sesiones, multijugador y compras, responder a solicitudes, prevenir fraudes y mejorar Focus Train. Las bases son el contrato, la obligación legal, el consentimiento o el interés legítimo.",
        ],
      },
      {
        title: "5. Autenticación",
        paragraphs: [
          "Firebase Authentication gestiona correo, Google y Apple en iOS. Las contraseñas se envían a Firebase y no se guardan en las bases de Focus Train.",
        ],
      },
      {
        title: "6. Almacenamiento",
        paragraphs: [
          "Firebase conserva cuenta, progreso, colección, sesiones y moderación. El dispositivo guarda sesión, cachés y preferencias. iOS usa SwiftData y App Group; Android usa archivos privados excluidos de copias y transferencias.",
        ],
      },
      {
        title: "7. Servicios externos",
        bullets: [
          "Google/Firebase: autenticación, bases, funciones y analítica Android.",
          "Google y Apple: inicio de sesión.",
          "StoreKit, Google Play y RevenueCat: compras y suscripciones.",
          "MapLibre/OpenFreeMap y datos ferroviarios públicos: mapas y rutas.",
          "Webful: analítica web sin cookies, alojada en Francia según el proveedor.",
        ],
      },
      {
        title: "8. Firebase y Google",
        paragraphs: [
          "El proyecto es focus-train-74550. Android usa Authentication, Firestore, Realtime Database, Cloud Functions y Analytics; iOS, los mismos salvo Analytics. Crashlytics no está integrado y los clientes revisados no suben archivos de usuario a Storage.",
        ],
      },
      {
        title: "9. Compras y suscripciones",
        paragraphs: [
          "Apple procesa iOS mediante StoreKit; Google Play y RevenueCat procesan Android. Focus Train no recibe los datos completos de tarjeta. Borrar la cuenta no cancela una suscripción de la tienda.",
        ],
      },
      {
        title: "10. Analítica y registros",
        paragraphs: [
          "Firebase Analytics solo está en Android, sin identificadores publicitarios ni personalización. Las apps y funciones crean registros técnicos. Webful mide audiencia y rendimiento sin cookies.",
        ],
      },
      {
        title: "11. Notificaciones",
        paragraphs: [
          "Con permiso, se usan notificaciones locales para recordatorios, descansos, Live Activities y widgets iOS y el servicio de audio Android. No se encontró Firebase Cloud Messaging.",
        ],
      },
      {
        title: "12. Compartición",
        paragraphs: [
          "Solo compartimos datos con proveedores necesarios. En el mismo vagón se muestran alias, personaje, progreso, asiento y estado. Focus Train no vende datos ni los usa para publicidad entre aplicaciones.",
        ],
      },
      {
        title: "13. Conservación",
        paragraphs: [
          "Los datos de cuenta se conservan mientras esté activa o hasta su eliminación. Presencia y asientos son temporales. Los datos locales permanecen hasta borrado o desinstalación. Proveedores y tiendas aplican sus plazos. La cookie vence a los seis meses.",
        ],
      },
      {
        title: "14. Seguridad",
        paragraphs: [
          "Las comunicaciones usan HTTPS/TLS. Firebase, reglas y funciones protegen operaciones sensibles. Los datos Android privados se excluyen de copias. Ningún sistema garantiza seguridad absoluta.",
        ],
      },
      {
        title: "15. Eliminación",
        paragraphs: [
          "En Ajustes → Cuenta → Eliminar mi cuenta, el servidor borra perfil, progreso, colecciones, sesiones, compras asociadas, informes, bloqueos, presencia y archivos privados antes de la identidad Firebase. Las salas compartidas se anonimizan si contienen datos de otros viajeros.",
          "Tras la confirmación, las apps limpian datos locales. Si no puedes usar la opción, escribe a {email}; puede requerirse verificación.",
        ],
      },
      {
        title: "16. Tus derechos",
        paragraphs: [
          "Según el RGPD puedes solicitar acceso, rectificación, supresión, limitación, oposición y portabilidad, y retirar el consentimiento. Escribe a {email}. También puedes acudir a la CNIL francesa.",
        ],
      },
      {
        title: "17. Menores",
        paragraphs: [
          "El registro permite indicar menos de 18 años, pero Focus Train no se dirige específicamente a niños. Padres o tutores pueden contactarnos si creen que un menor facilitó datos indebidamente.",
        ],
      },
      {
        title: "18. Transferencias internacionales",
        paragraphs: [
          "Algunos proveedores tratan datos fuera del EEE con las garantías aplicables, como decisiones de adecuación o cláusulas contractuales tipo. Webful declara alojamiento en Francia.",
        ],
      },
      {
        title: "19. Cambios",
        paragraphs: [
          "La política puede cambiar con la app, proveedores o normativa. La fecha superior indica la versión vigente y avisaremos cuando proceda.",
        ],
      },
      {
        title: "20. Contacto",
        paragraphs: ["Para cualquier solicitud de privacidad: {email}."],
      },
    ],
  },
  zh: {
    eyebrow: "隐私",
    title: "隐私政策",
    intro:
      "本政策说明 Focus Train 在 iOS、Android 和 focus-train.fr 上如何处理数据。具体处理取决于平台和你使用的功能。",
    toc: "目录",
    sections: [
      {
        title: "1. 概述",
        paragraphs: [
          "Focus Train 是游戏化效率应用。专注会推动列车、解锁城市和收藏，也可在多人车厢中与其他旅客一起进行。",
        ],
      },
      {
        title: "2. 数据控制者",
        paragraphs: [
          "Focus Train 由法国的开发者账户“Alexis Guerquin – Phenomenals”运营。隐私请求请发送至 {email}。",
        ],
      },
      {
        title: "3. 收集的数据",
        bullets: [
          "账户：邮箱、Firebase 用户 ID、登录方式、昵称和初始偏好。",
          "专注与进度：日期、时长、番茄钟设置、路线、站点、距离、收藏和奖励。",
          "多人模式：昵称、角色、列车、车厢、座位、在线状态、屏蔽和举报。",
          "购买与支持：产品、会员权益、商店交易标识及你提交的支持信息。",
          "网站：可选候补邮箱、Cookie 偏好及 Webful 无 Cookie 统计。",
        ],
      },
      {
        title: "4. 用途与法律依据",
        paragraphs: [
          "数据用于提供和保护账户、同步进度、运行专注与多人功能、管理购买、处理支持、防止欺诈和改进服务。依据可能是履行服务、法律义务、同意或合法利益。",
        ],
      },
      {
        title: "5. 身份验证",
        paragraphs: [
          "Firebase Authentication 处理邮箱、Google 以及 iOS 上的 Apple 登录。密码传给 Firebase 验证，不存入 Focus Train 数据库。",
        ],
      },
      {
        title: "6. 本地与远程存储",
        paragraphs: [
          "Firebase 保存账户、进度、收藏、会话和管理数据。设备保存登录、缓存和偏好。iOS 使用 SwiftData 和 App Group；Android 使用不参与备份和迁移的私有文件。",
        ],
      },
      {
        title: "7. 第三方服务",
        bullets: [
          "Google/Firebase：验证、数据库、云函数和 Android 分析。",
          "Google 与 Apple：账户登录。",
          "StoreKit、Google Play、RevenueCat：购买和订阅。",
          "MapLibre/OpenFreeMap 与公共铁路数据：地图和路线。",
          "Webful：无 Cookie 网站统计；供应商称数据托管于法国。",
        ],
      },
      {
        title: "8. Firebase 与 Google",
        paragraphs: [
          "Firebase 项目为 focus-train-74550。Android 使用 Authentication、Firestore、Realtime Database、Cloud Functions 和 Analytics；iOS 除 Analytics 外相同。未集成 Crashlytics，审核的客户端不上传用户文件至 Storage。",
        ],
      },
      {
        title: "9. 购买与订阅",
        paragraphs: [
          "Apple 通过 StoreKit 处理 iOS 付款；Google Play 和 RevenueCat 处理 Android。Focus Train 不接收完整银行卡数据。删除账户不会取消商店订阅。",
        ],
      },
      {
        title: "10. 分析、诊断与日志",
        paragraphs: [
          "Firebase Analytics 仅用于 Android，广告标识和个性化信号已关闭。应用和云函数生成技术日志。网站通过 Webful 进行无 Cookie 访问与性能统计。",
        ],
      },
      {
        title: "11. 通知",
        paragraphs: [
          "经授权后，本地通知用于专注提醒、休息、iOS 实时活动与小组件，以及 Android 前台音频服务。审核代码中未发现 Firebase Cloud Messaging。",
        ],
      },
      {
        title: "12. 数据共享",
        paragraphs: [
          "数据仅与必要供应商共享。同一车厢旅客可看到昵称、角色、显示的进度、座位和专注状态。Focus Train 不出售个人数据，也不进行跨应用广告。",
        ],
      },
      {
        title: "13. 保存期限",
        paragraphs: [
          "账户数据保存至账户删除。多人在线状态和座位锁为临时数据。本地数据在清理或卸载前保留。商店与供应商可能适用自己的法定期限。网站偏好 Cookie 六个月后过期。",
        ],
      },
      {
        title: "14. 安全",
        paragraphs: [
          "网络使用 HTTPS/TLS。Firebase 验证、访问规则和服务器函数保护敏感操作。Android 私有数据不参与备份。任何系统都无法保证绝对安全。",
        ],
      },
      {
        title: "15. 删除账户与数据",
        paragraphs: [
          "在设置 → 账户 → 删除我的账户中，服务器会删除资料、进度、收藏、会话、订阅关联、举报、屏蔽、多人在线状态和私有文件，最后删除 Firebase 身份。含其他旅客数据的共享房间会保留并匿名化创建者。",
          "服务器确认后，应用也会清除本地数据。如无法使用应用内选项，请联系 {email}，可能需要验证身份。",
        ],
      },
      {
        title: "16. 你的权利",
        paragraphs: [
          "在 GDPR 适用范围内，你可要求访问、更正、删除、限制、反对和可携带，并撤回未来同意。请联系 {email}，也可向法国 CNIL 投诉。",
        ],
      },
      {
        title: "17. 未成年人",
        paragraphs: [
          "初始设置可选择未满 18 岁，但 Focus Train 并非专为儿童设计。监护人如认为未成年人不当提交数据，可联系我们。",
        ],
      },
      {
        title: "18. 国际传输",
        paragraphs: [
          "部分供应商可能在欧洲经济区以外处理数据，并采用充分性决定或标准合同条款等保障。Webful 表示其服务托管在法国。",
        ],
      },
      {
        title: "19. 政策变更",
        paragraphs: [
          "政策会随应用、供应商或法规更新。页面顶部日期表示当前版本，必要时会另行通知。",
        ],
      },
      {
        title: "20. 联系方式",
        paragraphs: ["任何隐私问题或请求请联系 {email}。"],
      },
    ],
  },
  ja: {
    eyebrow: "プライバシー",
    title: "プライバシーポリシー",
    intro:
      "本ポリシーは、Focus TrainのiOS・Androidアプリおよびfocus-train.frにおけるデータ処理を説明します。処理内容は利用機能とプラットフォームにより異なります。",
    toc: "目次",
    sections: [
      {
        title: "1. 概要",
        paragraphs: [
          "Focus Trainはゲーム要素を持つ生産性向上アプリです。集中すると列車が進み、街やコレクションを解放し、マルチプレイでは他の旅人と同じ車両で利用できます。",
        ],
      },
      {
        title: "2. データ管理者",
        paragraphs: [
          "Focus Trainはフランスの開発者アカウント「Alexis Guerquin – Phenomenals」により運営されています。プライバシーに関するご依頼は {email} へお送りください。",
        ],
      },
      {
        title: "3. 収集するデータ",
        bullets: [
          "アカウント：メール、Firebase ID、ログイン方法、表示名、初期設定。",
          "集中と進行：日時、時間、ポモドーロ設定、ルート、駅、距離、コレクション、報酬。",
          "マルチプレイ：表示名、キャラクター、列車、車両、座席、在席状況、ブロック、報告。",
          "購入とサポート：商品、権利、ストアの取引ID、問い合わせで送信した情報。",
          "Web：任意の順番待ちメール、Cookie設定、WebfulのCookieなし統計。",
        ],
      },
      {
        title: "4. 目的と法的根拠",
        paragraphs: [
          "アカウントの提供と保護、進行同期、集中・マルチプレイ機能、購入、サポート、不正防止、改善に使用します。法的根拠はサービス履行、法的義務、同意または正当な利益です。",
        ],
      },
      {
        title: "5. 認証",
        paragraphs: [
          "Firebase Authenticationがメール、Google、iOSのAppleログインを処理します。パスワードはFirebaseに送信され、Focus Trainのデータベースには保存されません。",
        ],
      },
      {
        title: "6. 保存",
        paragraphs: [
          "Firebaseがアカウント、進行、コレクション、セッション、モデレーションを保存します。端末にはセッション、キャッシュ、設定が保存されます。iOSはSwiftDataとApp Group、Androidはバックアップ対象外の非公開ファイルを使用します。",
        ],
      },
      {
        title: "7. 外部サービス",
        bullets: [
          "Google/Firebase：認証、データベース、Cloud Functions、Android Analytics。",
          "Google・Apple：ログイン。",
          "StoreKit、Google Play、RevenueCat：購入とサブスクリプション。",
          "MapLibre/OpenFreeMapと公開鉄道データ：地図とルート。",
          "Webful：CookieなしWeb解析。事業者によればフランスでホスト。",
        ],
      },
      {
        title: "8. FirebaseとGoogle",
        paragraphs: [
          "Firebaseプロジェクトはfocus-train-74550です。AndroidはAuthentication、Firestore、Realtime Database、Cloud Functions、Analyticsを使用し、iOSはAnalytics以外を使用します。Crashlyticsは未導入で、確認したクライアントはStorageへユーザーファイルを送信しません。",
        ],
      },
      {
        title: "9. 購入とサブスクリプション",
        paragraphs: [
          "iOSはApple StoreKit、AndroidはGoogle PlayとRevenueCatが処理します。完全なカード情報は受け取りません。アカウント削除だけではストアのサブスクリプションは解約されません。",
        ],
      },
      {
        title: "10. 分析・診断・ログ",
        paragraphs: [
          "Firebase AnalyticsはAndroidのみで、広告IDと広告パーソナライズ信号は無効です。アプリとCloud Functionsは技術ログを作成します。WebサイトはWebfulでCookieなしの利用・性能測定を行います。",
        ],
      },
      {
        title: "11. 通知",
        paragraphs: [
          "許可を得た場合、集中リマインダー、休憩、iOS Live Activities・ウィジェット、Android音声サービスにローカル通知を使います。Firebase Cloud Messagingは確認されていません。",
        ],
      },
      {
        title: "12. 共有",
        paragraphs: [
          "必要な事業者とのみ共有します。同じ車両の旅人には表示名、キャラクター、表示進行、座席、集中状態が見えます。個人データを販売せず、アプリ横断広告に使用しません。",
        ],
      },
      {
        title: "13. 保持期間",
        paragraphs: [
          "アカウントデータは有効中または削除まで保持します。在席情報と座席ロックは一時的です。端末データは消去またはアンインストールまで残ります。ストア等は独自の法定期間を適用します。Cookieは6か月で期限切れです。",
        ],
      },
      {
        title: "14. セキュリティ",
        paragraphs: [
          "通信はHTTPS/TLSを使用します。Firebase認証、アクセスルール、サーバー関数が重要操作を保護します。Android非公開データはバックアップされません。絶対的な安全は保証できません。",
        ],
      },
      {
        title: "15. アカウントとデータの削除",
        paragraphs: [
          "設定 → アカウント → アカウントを削除から、プロフィール、進行、コレクション、セッション、購入関連、報告、ブロック、在席、非公開ファイルを削除し、最後にFirebase IDを削除します。他人のデータを含む共有ルームは作成者情報を匿名化して残ります。",
          "確認後、アプリは端末データも消去します。操作できない場合は {email} へご連絡ください。本人確認をお願いする場合があります。",
        ],
      },
      {
        title: "16. 権利",
        paragraphs: [
          "GDPRが適用される場合、アクセス、訂正、削除、制限、異議、ポータビリティ、将来の同意撤回を請求できます。{email} へご連絡ください。フランスCNILへの申立ても可能です。",
        ],
      },
      {
        title: "17. 未成年者",
        paragraphs: [
          "18歳未満を選択できますが、子ども向け専用サービスではありません。不適切なデータ提供が疑われる場合、保護者はご連絡ください。",
        ],
      },
      {
        title: "18. 国際移転",
        paragraphs: [
          "一部事業者はEEA外で処理する場合があり、十分性認定や標準契約条項等の保護措置を使用します。Webfulはフランスでのホストを表明しています。",
        ],
      },
      {
        title: "19. 変更",
        paragraphs: [
          "アプリ、事業者、法令に応じて変更します。上部の日付が現行版を示し、必要な変更は追加でお知らせします。",
        ],
      },
      {
        title: "20. 連絡先",
        paragraphs: ["プライバシーに関するご質問・請求は {email} へ。"],
      },
    ],
  },
  ko: {
    eyebrow: "개인정보",
    title: "개인정보 처리방침",
    intro:
      "이 방침은 Focus Train의 iOS·Android 앱과 focus-train.fr에서 데이터를 처리하는 방식을 설명합니다. 처리는 플랫폼과 기능에 따라 다릅니다.",
    toc: "목차",
    sections: [
      {
        title: "1. 개요",
        paragraphs: [
          "Focus Train은 게임화된 생산성 앱입니다. 집중 세션이 기차를 움직이고 도시와 수집품을 열며 멀티플레이에서 다른 여행자와 함께할 수 있습니다.",
        ],
      },
      {
        title: "2. 데이터 관리자",
        paragraphs: [
          "Focus Train은 프랑스의 개발자 계정 ‘Alexis Guerquin – Phenomenals’에서 운영합니다. 개인정보 요청은 {email}로 보내 주세요.",
        ],
      },
      {
        title: "3. 수집 데이터",
        bullets: [
          "계정: 이메일, Firebase ID, 로그인 제공자, 표시 이름, 온보딩 설정.",
          "집중과 진행: 날짜, 시간, 포모도로 설정, 경로, 정차역, 거리, 컬렉션, 보상.",
          "멀티플레이: 이름, 캐릭터, 기차, 객차, 좌석, 접속 상태, 차단, 신고.",
          "구매와 지원: 상품, 권한, 스토어 거래 식별자, 문의에 포함한 정보.",
          "웹: 선택적 대기 이메일, 쿠키 설정, Webful의 쿠키 없는 통계.",
        ],
      },
      {
        title: "4. 목적과 법적 근거",
        paragraphs: [
          "계정 제공과 보호, 진행 동기화, 집중·멀티플레이·구매 기능, 지원, 사기 방지와 개선에 사용합니다. 근거는 서비스 이행, 법적 의무, 동의 또는 정당한 이익입니다.",
        ],
      },
      {
        title: "5. 인증",
        paragraphs: [
          "Firebase Authentication이 이메일, Google, iOS의 Apple 로그인을 처리합니다. 비밀번호는 Firebase로 전송되며 Focus Train 데이터베이스에 저장되지 않습니다.",
        ],
      },
      {
        title: "6. 저장",
        paragraphs: [
          "Firebase가 계정, 진행, 컬렉션, 세션, 운영 데이터를 저장합니다. 기기는 세션, 캐시, 설정을 보관합니다. iOS는 SwiftData와 App Group, Android는 백업과 전송에서 제외된 비공개 파일을 사용합니다.",
        ],
      },
      {
        title: "7. 외부 서비스",
        bullets: [
          "Google/Firebase: 인증, 데이터베이스, Cloud Functions, Android 분석.",
          "Google·Apple: 계정 로그인.",
          "StoreKit, Google Play, RevenueCat: 구매와 구독.",
          "MapLibre/OpenFreeMap과 공공 철도 데이터: 지도와 경로.",
          "Webful: 쿠키 없는 웹 분석. 제공자에 따르면 프랑스 호스팅.",
        ],
      },
      {
        title: "8. Firebase와 Google",
        paragraphs: [
          "Firebase 프로젝트는 focus-train-74550입니다. Android는 Authentication, Firestore, Realtime Database, Cloud Functions, Analytics를 사용하고 iOS는 Analytics를 제외한 서비스를 사용합니다. Crashlytics는 없고 검토한 클라이언트는 Storage에 사용자 파일을 올리지 않습니다.",
        ],
      },
      {
        title: "9. 구매와 구독",
        paragraphs: [
          "iOS 결제는 Apple StoreKit, Android는 Google Play와 RevenueCat이 처리합니다. 전체 카드 정보는 받지 않습니다. 계정 삭제만으로 스토어 구독이 취소되지 않습니다.",
        ],
      },
      {
        title: "10. 분석과 로그",
        paragraphs: [
          "Firebase Analytics는 Android에만 있으며 광고 ID와 개인화 신호는 꺼져 있습니다. 앱과 Cloud Functions는 기술 로그를 만듭니다. 웹은 Webful로 쿠키 없는 이용·성능 통계를 측정합니다.",
        ],
      },
      {
        title: "11. 알림",
        paragraphs: [
          "허용 시 집중 알림, 휴식, iOS Live Activities·위젯, Android 오디오 서비스에 로컬 알림을 사용합니다. Firebase Cloud Messaging은 확인되지 않았습니다.",
        ],
      },
      {
        title: "12. 공유",
        paragraphs: [
          "필요한 제공자에게만 공유합니다. 같은 객차의 여행자는 표시 이름, 캐릭터, 표시 진행, 좌석과 집중 상태를 봅니다. 개인정보를 판매하거나 앱 간 광고에 사용하지 않습니다.",
        ],
      },
      {
        title: "13. 보유 기간",
        paragraphs: [
          "계정 데이터는 활성 기간 또는 삭제 시까지 보유합니다. 접속 상태와 좌석 잠금은 임시입니다. 기기 데이터는 삭제나 제거 전까지 남습니다. 스토어와 제공자는 별도 법정 기간을 적용할 수 있습니다. 쿠키는 6개월 후 만료됩니다.",
        ],
      },
      {
        title: "14. 보안",
        paragraphs: [
          "통신은 HTTPS/TLS를 사용합니다. Firebase 인증, 규칙, 서버 함수가 민감한 작업을 보호합니다. Android 비공개 데이터는 백업되지 않습니다. 절대적 보안은 보장할 수 없습니다.",
        ],
      },
      {
        title: "15. 계정과 데이터 삭제",
        paragraphs: [
          "설정 → 계정 → 계정 삭제에서 프로필, 진행, 컬렉션, 세션, 구매 연결, 신고, 차단, 접속 상태, 비공개 파일을 지운 뒤 Firebase ID를 삭제합니다. 다른 여행자 데이터가 있는 공유 방은 생성자 연결을 익명화해 남깁니다.",
          "서버 확인 후 앱은 로컬 데이터도 정리합니다. 기능을 사용할 수 없다면 {email}로 문의하세요. 본인 확인이 필요할 수 있습니다.",
        ],
      },
      {
        title: "16. 권리",
        paragraphs: [
          "GDPR 적용 시 열람, 정정, 삭제, 제한, 반대, 이동권과 향후 동의 철회를 요청할 수 있습니다. {email}로 문의하거나 프랑스 CNIL에 신고할 수 있습니다.",
        ],
      },
      {
        title: "17. 미성년자",
        paragraphs: [
          "온보딩에서 18세 미만을 표시할 수 있지만 어린이 전용 서비스는 아닙니다. 미성년자가 부적절하게 데이터를 제공했다고 생각하면 보호자가 문의할 수 있습니다.",
        ],
      },
      {
        title: "18. 국제 이전",
        paragraphs: [
          "일부 제공자는 EEA 밖에서 처리할 수 있으며 적정성 결정이나 표준계약조항 등 보호 장치를 사용합니다. Webful은 프랑스 호스팅을 밝힙니다.",
        ],
      },
      {
        title: "19. 변경",
        paragraphs: [
          "앱, 제공자, 법규에 따라 방침이 바뀔 수 있습니다. 상단 날짜가 현재 버전을 나타내며 필요한 경우 추가로 알립니다.",
        ],
      },
      {
        title: "20. 연락처",
        paragraphs: ["개인정보 질문이나 요청은 {email}로 보내 주세요."],
      },
    ],
  },
};

const legalNotices: Record<Locale, LegalDocument> = {
  en: {
    eyebrow: "Information",
    title: "Legal notice",
    intro:
      "Information about the publisher, hosting and use of the official Focus Train website.",
    sections: [
      {
        title: "1. Website publisher",
        paragraphs: [
          "Published service: Focus Train. Contact: {email}. The publication director is the person legally representing the publisher.",
        ],
      },
      {
        title: "2. Hosting",
        paragraphs: [
          "Hosting information depends on the production platform and is kept current in the deployment configuration.",
        ],
      },
      {
        title: "3. Intellectual property",
        paragraphs: [
          "The website, visual identity, text, illustrations, interface and trademarks are protected. Unauthorized reproduction or use, in whole or in part, is prohibited except where permitted by law.",
        ],
      },
      {
        title: "4. Liability",
        paragraphs: [
          "The publisher aims to provide accurate, current information but cannot guarantee the absence of errors or interruption. Focus Train is an independent productivity app; it does not sell tickets or replace railway operators.",
        ],
      },
      {
        title: "5. External links",
        paragraphs: [
          "The website may link to third-party services. The publisher does not control their content or practices; please review their terms.",
        ],
      },
      {
        title: "6. Applicable law",
        paragraphs: [
          "This notice is governed by the law applicable at the publisher’s place of establishment, subject to mandatory consumer protections.",
        ],
      },
      {
        title: "7. Contact",
        paragraphs: ["For questions about the website, contact {email}."],
      },
    ],
  },
  fr: {
    eyebrow: "Informations",
    title: "Mentions légales",
    intro:
      "Informations relatives à l’édition, à l’hébergement et à l’utilisation du site officiel de Focus Train.",
    sections: [
      {
        title: "1. Éditeur du site",
        paragraphs: [
          "Service édité : Focus Train. Contact : {email}. La direction de la publication est assurée par la personne représentant légalement l’éditeur.",
        ],
      },
      {
        title: "2. Hébergement",
        paragraphs: [
          "Les informations relatives à l’hébergeur dépendent de la plateforme de production et sont tenues à jour dans la configuration de déploiement.",
        ],
      },
      {
        title: "3. Propriété intellectuelle",
        paragraphs: [
          "Le site, son identité visuelle, ses textes, illustrations, interfaces et marques sont protégés. Toute reproduction ou utilisation non autorisée est interdite, sous réserve des exceptions légales.",
        ],
      },
      {
        title: "4. Responsabilité",
        paragraphs: [
          "L’éditeur vise des informations exactes et à jour sans garantir l’absence d’erreur ou d’interruption. Focus Train est une app de productivité indépendante : elle ne vend pas de billets et ne remplace pas les opérateurs ferroviaires.",
        ],
      },
      {
        title: "5. Liens externes",
        paragraphs: [
          "Le site peut renvoyer vers des services tiers que l’éditeur ne contrôle pas. Consultez leurs propres conditions.",
        ],
      },
      {
        title: "6. Droit applicable",
        paragraphs: [
          "Ces mentions sont soumises au droit du lieu d’établissement de l’éditeur, sous réserve des protections impératives des consommateurs.",
        ],
      },
      {
        title: "7. Contact",
        paragraphs: ["Pour toute question relative au site : {email}."],
      },
    ],
  },
  es: {
    eyebrow: "Información",
    title: "Aviso legal",
    intro:
      "Información sobre la edición, el alojamiento y el uso del sitio oficial de Focus Train.",
    sections: [
      {
        title: "1. Editor",
        paragraphs: [
          "Servicio publicado: Focus Train. Contacto: {email}. La dirección de publicación corresponde al representante legal del editor.",
        ],
      },
      {
        title: "2. Alojamiento",
        paragraphs: [
          "La información del proveedor depende de la plataforma de producción y se mantiene actualizada en la configuración de despliegue.",
        ],
      },
      {
        title: "3. Propiedad intelectual",
        paragraphs: [
          "El sitio, identidad, textos, ilustraciones, interfaz y marcas están protegidos. Se prohíbe su uso no autorizado salvo excepción legal.",
        ],
      },
      {
        title: "4. Responsabilidad",
        paragraphs: [
          "El editor procura información correcta y actual, sin garantizar ausencia de errores o interrupciones. Focus Train no vende billetes ni sustituye a operadores ferroviarios.",
        ],
      },
      {
        title: "5. Enlaces externos",
        paragraphs: [
          "El sitio puede enlazar servicios externos que el editor no controla. Consulta sus condiciones.",
        ],
      },
      {
        title: "6. Ley aplicable",
        paragraphs: [
          "Se aplica la ley del lugar de establecimiento del editor, sin perjuicio de la protección obligatoria del consumidor.",
        ],
      },
      {
        title: "7. Contacto",
        paragraphs: ["Para preguntas sobre el sitio: {email}."],
      },
    ],
  },
  zh: {
    eyebrow: "信息",
    title: "法律声明",
    intro: "关于 Focus Train 官方网站的发布、托管和使用信息。",
    sections: [
      {
        title: "1. 网站发布者",
        paragraphs: [
          "发布服务：Focus Train。联系方式：{email}。发布负责人为依法代表发布者的人。",
        ],
      },
      {
        title: "2. 托管",
        paragraphs: ["托管信息取决于生产平台，并在部署配置中保持更新。"],
      },
      {
        title: "3. 知识产权",
        paragraphs: [
          "网站、视觉形象、文字、插画、界面和商标均受保护。除法律允许外，禁止未经授权的复制或使用。",
        ],
      },
      {
        title: "4. 责任限制",
        paragraphs: [
          "发布者力求提供准确及时的信息，但不保证无错误或中断。Focus Train 不销售车票，也不替代铁路运营商。",
        ],
      },
      {
        title: "5. 外部链接",
        paragraphs: [
          "网站可能链接至发布者无法控制的第三方服务，请查阅其条款。",
        ],
      },
      {
        title: "6. 适用法律",
        paragraphs: ["本声明适用发布者所在地法律，但不影响强制消费者保护。"],
      },
      { title: "7. 联系方式", paragraphs: ["网站相关问题请联系 {email}。"] },
    ],
  },
  ja: {
    eyebrow: "情報",
    title: "法的情報",
    intro: "Focus Train公式サイトの運営、ホスティング、利用に関する情報です。",
    sections: [
      {
        title: "1. 運営者",
        paragraphs: [
          "サービス：Focus Train。連絡先：{email}。発行責任者は運営者を法的に代表する者です。",
        ],
      },
      {
        title: "2. ホスティング",
        paragraphs: [
          "ホスト情報は本番プラットフォームにより異なり、デプロイ設定で最新に保たれます。",
        ],
      },
      {
        title: "3. 知的財産",
        paragraphs: [
          "サイト、視覚表現、文章、イラスト、UI、商標は保護されています。法令上の例外を除き無断利用を禁止します。",
        ],
      },
      {
        title: "4. 責任",
        paragraphs: [
          "正確で最新の情報提供に努めますが、誤りや中断がないことは保証しません。Focus Trainは切符を販売せず、鉄道事業者を代替しません。",
        ],
      },
      {
        title: "5. 外部リンク",
        paragraphs: [
          "管理外の第三者サービスへリンクする場合があります。各条件をご確認ください。",
        ],
      },
      {
        title: "6. 準拠法",
        paragraphs: [
          "消費者保護の強行規定を除き、運営者所在地の法令に従います。",
        ],
      },
      { title: "7. 連絡先", paragraphs: ["サイトに関するご質問：{email}。"] },
    ],
  },
  ko: {
    eyebrow: "정보",
    title: "법적 고지",
    intro: "Focus Train 공식 웹사이트의 운영, 호스팅 및 이용 정보입니다.",
    sections: [
      {
        title: "1. 사이트 운영자",
        paragraphs: [
          "서비스: Focus Train. 연락처: {email}. 발행 책임자는 운영자를 법적으로 대표하는 사람입니다.",
        ],
      },
      {
        title: "2. 호스팅",
        paragraphs: [
          "호스팅 정보는 운영 플랫폼에 따라 달라지며 배포 설정에 최신 상태로 유지됩니다.",
        ],
      },
      {
        title: "3. 지식재산",
        paragraphs: [
          "사이트, 시각 요소, 글, 일러스트, 인터페이스와 상표는 보호됩니다. 법적 예외를 제외한 무단 사용을 금지합니다.",
        ],
      },
      {
        title: "4. 책임",
        paragraphs: [
          "정확하고 최신 정보를 제공하도록 노력하지만 오류나 중단이 없음을 보장하지 않습니다. Focus Train은 승차권을 판매하거나 철도 운영사를 대신하지 않습니다.",
        ],
      },
      {
        title: "5. 외부 링크",
        paragraphs: [
          "운영자가 통제하지 않는 외부 서비스로 연결될 수 있습니다. 해당 조건을 확인하세요.",
        ],
      },
      {
        title: "6. 준거법",
        paragraphs: [
          "의무적 소비자 보호를 전제로 운영자 소재지 법률을 따릅니다.",
        ],
      },
      { title: "7. 연락처", paragraphs: ["사이트 관련 문의: {email}."] },
    ],
  },
};

const deleteAccount: Record<Locale, LegalDocument> = {
  en: {
    eyebrow: "Account and data",
    title: "Delete your Focus Train account",
    intro:
      "You can permanently delete your account and related data in the app or by contacting our team.",
    sections: [
      {
        title: "From the app",
        paragraphs: [
          "Open Focus Train, go to Settings, choose Delete my account and confirm.",
        ],
      },
      {
        title: "Without access to the app",
        paragraphs: [
          "Email {email} from the address linked to your account. Include only the account address to delete. We may request verification to prevent fraudulent deletion.",
        ],
      },
      {
        title: "Data deleted",
        paragraphs: [
          "Deletion covers the profile, progress, saved sessions, collection, multiplayer data and account preferences. Some information may be retained only as legally required, to prevent fraud or resolve disputes. Store purchase records remain subject to Apple or Google retention rules.",
        ],
      },
      {
        title: "Subscriptions",
        paragraphs: [
          "Deleting the account does not automatically cancel a subscription. Cancel it separately in the App Store or Google Play before deletion if you do not want it renewed.",
        ],
      },
    ],
  },
  fr: {
    eyebrow: "Compte et données",
    title: "Supprimer ton compte Focus Train",
    intro:
      "Tu peux supprimer définitivement ton compte et les données associées depuis l’application ou en contactant notre équipe.",
    sections: [
      {
        title: "Depuis l’application",
        paragraphs: [
          "Ouvre Focus Train, va dans Réglages, sélectionne Supprimer mon compte et confirme.",
        ],
      },
      {
        title: "Sans accès à l’application",
        paragraphs: [
          "Écris à {email} depuis l’adresse liée au compte. Indique uniquement l’adresse à supprimer. Une vérification peut être demandée pour prévenir une suppression frauduleuse.",
        ],
      },
      {
        title: "Données supprimées",
        paragraphs: [
          "La suppression couvre le profil, la progression, les sessions, la collection, le multijoueur et les préférences. Certaines informations peuvent être conservées si la loi l’impose, pour prévenir la fraude ou traiter un litige. Les achats restent soumis aux règles Apple ou Google.",
        ],
      },
      {
        title: "Abonnements",
        paragraphs: [
          "Supprimer le compte n’annule pas automatiquement un abonnement. Résilie-le séparément dans l’App Store ou Google Play avant la suppression.",
        ],
      },
    ],
  },
  es: {
    eyebrow: "Cuenta y datos",
    title: "Eliminar tu cuenta de Focus Train",
    intro:
      "Puedes eliminar de forma permanente la cuenta y los datos desde la app o contactando con el equipo.",
    sections: [
      {
        title: "Desde la aplicación",
        paragraphs: [
          "Abre Focus Train, entra en Ajustes, elige Eliminar mi cuenta y confirma.",
        ],
      },
      {
        title: "Sin acceso a la aplicación",
        paragraphs: [
          "Escribe a {email} desde el correo vinculado. Podemos pedir verificación para evitar una eliminación fraudulenta.",
        ],
      },
      {
        title: "Datos eliminados",
        paragraphs: [
          "Se eliminan perfil, progreso, sesiones, colección, datos multijugador y preferencias. Solo se retendrá información cuando la ley, la prevención del fraude o un litigio lo exijan. Las compras siguen las reglas de Apple o Google.",
        ],
      },
      {
        title: "Suscripciones",
        paragraphs: [
          "Eliminar la cuenta no cancela una suscripción. Cancélala por separado en App Store o Google Play.",
        ],
      },
    ],
  },
  zh: {
    eyebrow: "账户与数据",
    title: "删除 Focus Train 账户",
    intro: "你可以在应用中永久删除账户及相关数据，或联系我们的团队。",
    sections: [
      {
        title: "在应用中",
        paragraphs: ["打开 Focus Train，进入设置，选择删除我的账户并确认。"],
      },
      {
        title: "无法访问应用",
        paragraphs: [
          "请从绑定邮箱发送邮件至 {email}。为防止恶意删除，我们可能要求验证身份。",
        ],
      },
      {
        title: "删除的数据",
        paragraphs: [
          "将删除资料、进度、会话、收藏、多人数据和偏好。法律、反欺诈或争议所需的信息可能继续保留。购买记录适用 Apple 或 Google 规则。",
        ],
      },
      {
        title: "订阅",
        paragraphs: [
          "删除账户不会自动取消订阅。如不希望续费，请先在 App Store 或 Google Play 中取消。",
        ],
      },
    ],
  },
  ja: {
    eyebrow: "アカウントとデータ",
    title: "Focus Trainアカウントを削除",
    intro:
      "アプリまたはお問い合わせにより、アカウントと関連データを完全に削除できます。",
    sections: [
      {
        title: "アプリから",
        paragraphs: [
          "Focus Trainを開き、設定から「アカウントを削除」を選び確認します。",
        ],
      },
      {
        title: "アプリを利用できない場合",
        paragraphs: [
          "登録メールから {email} へご連絡ください。不正削除防止のため本人確認をお願いする場合があります。",
        ],
      },
      {
        title: "削除されるデータ",
        paragraphs: [
          "プロフィール、進行、セッション、コレクション、マルチプレイデータ、設定が削除されます。法令、不正防止、紛争対応に必要な情報は保持される場合があります。購入記録にはAppleまたはGoogleの規則が適用されます。",
        ],
      },
      {
        title: "サブスクリプション",
        paragraphs: [
          "アカウント削除だけでは解約されません。更新を希望しない場合はApp StoreまたはGoogle Playで別途解約してください。",
        ],
      },
    ],
  },
  ko: {
    eyebrow: "계정과 데이터",
    title: "Focus Train 계정 삭제",
    intro:
      "앱에서 또는 팀에 문의하여 계정과 관련 데이터를 영구 삭제할 수 있습니다.",
    sections: [
      {
        title: "앱에서",
        paragraphs: [
          "Focus Train을 열고 설정에서 계정 삭제를 선택한 뒤 확인하세요.",
        ],
      },
      {
        title: "앱에 접근할 수 없는 경우",
        paragraphs: [
          "연결된 이메일로 {email}에 문의하세요. 부정 삭제를 막기 위해 본인 확인을 요청할 수 있습니다.",
        ],
      },
      {
        title: "삭제되는 데이터",
        paragraphs: [
          "프로필, 진행, 세션, 컬렉션, 멀티플레이 데이터와 설정을 삭제합니다. 법률, 사기 방지 또는 분쟁에 필요한 정보는 보관될 수 있습니다. 구매 기록은 Apple 또는 Google 규칙을 따릅니다.",
        ],
      },
      {
        title: "구독",
        paragraphs: [
          "계정 삭제는 구독을 자동 취소하지 않습니다. 갱신을 원하지 않으면 App Store 또는 Google Play에서 별도로 취소하세요.",
        ],
      },
    ],
  },
};

export const legalDocuments = { privacy, legalNotices, deleteAccount };
export type LegalDocumentKey = keyof typeof legalDocuments;
