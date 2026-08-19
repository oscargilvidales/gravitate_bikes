export const dictionaries = {
  es: {
    nav: {
      inicio: "Inicio",
      alquiler: "Alquiler",
      reparaciones: "Reparaciones",
      woom: "Bicis Infantiles Woom",
      quienesSomos: "Quiénes somos",
      contacto: "Contacto",
    },
    home: {
      hero: {
        location: "San Pedro Alcántara · Marbella",
        title1: "Visita Marbella",
        title2: "en bicicleta",
        btnRent: "Ver tarifas de alquiler",
        btnRepair: "Reparaciones",
      },
      services: {
        title: "Disfruta de Marbella de una manera diferente",
        subtitle: "Bicis de paseo y eléctricas desde 15€/día. Recorre el paseo marítimo de Marbella a tu ritmo, con precios claros y taller propio.",
        rent: { title: "Alquiler de bicicletas por día", desc: "Bicis cómodas y ligeras, perfectas para recorrer el paseo marítimo a tu ritmo.", btn: "Ver tarifas" },
        repair: { title: "Taller de reparaciones", desc: "Reparaciones rápidas y profesionales. Pinchazos, frenos, cambios de marchas y mucho más.", btn: "Ver servicios" },
        clean: { title: "Servicio de limpieza", desc: "Déjala como nueva. Limpieza de transmisión por 15€ y limpieza de bici completa por 20€.", btn: "Solicitar cita" }
      },
      whyUs: {
        title: "¿Por qué elegirnos?",
        subtitle: "Comprometidos con tu experiencia en el paseo marítimo de San Pedro.",
        loc: { title: "Ubicación inmejorable", desc: "En el corazón del paseo marítimo de San Pedro Alcántara." },
        hours: { title: "Abierto todos los días", desc: "Disponibles durante toda la temporada para que no te pierdas ni un paseo." },
        condition: { title: "Bicis en perfecto estado", desc: "Mantenimiento constante para que tu experiencia sea siempre segura y cómoda." },
        ages: { title: "Desde 15€ al día", desc: "Precios imbatibles para que pedalear por Marbella no te cueste un ojo de la cara. Sin sorpresas, sin letra pequeña." },
        fast: { title: "Taller rápido", desc: "Reparaciones en el momento para que no pierdas tiempo y vuelvas a rodar enseguida." },
        support: { title: "Atención personalizada", desc: "Te asesoramos sobre rutas y te recomendamos la mejor opción según tus necesidades." }
      },
      cta: {
        title: "¿Listo para pedalear?",
        subtitle: "Consúltanos sin compromiso o reserva tu bicicleta ahora mismo.",
        btnWa: "Reservar por WhatsApp",
        btnLoc: "¿Dónde estamos?"
      }
    },
    alquiler: {
      header: { title: "Alquila tu bici", subtitle: "Elige entre nuestras bicicletas de paseo y eléctricas para disfrutar del paseo marítimo a tu ritmo." },
      paseo: { title: "Bicicleta de paseo", desc: "Cómoda y ligera, perfecta para recorrer el paseo marítimo de San Pedro Alcántara a tu propio ritmo. Incluye casco y candado.", priceDay: "Tarifa por día", priceDayDesc: "Alquiler de 1 a 6 días", priceWeek: "Tarifa semanal (7 días o más)", priceWeekDesc: "Ahorra 33%", note: "Incluye casco y candado. El precio semanal se aplica a partir del 7.º día de alquiler consecutivo." },
      ebike: {
        title: "Bicicletas Eléctricas (E-bikes)",
        warning: "Para alquilar bicicletas eléctricas es necesario presentar DNI/Pasaporte original y tarjeta de crédito física. El alquiler es de 10:00 a 19:30 h. Si la bici se entrega después de las 19:30 h, se deberá abonar el día siguiente.",
        aviso: "Aviso importante:",
        models: {
          basica: {
            title: "E-bike Básica",
            desc: "Perfecta para moverte sin esfuerzo por la ciudad y el paseo marítimo. Batería con buena autonomía para disfrutar del día completo.",
            rateDay: "Tarifa por día",
            priceStd: "Precio estándar",
            perDay: "Por día de alquiler",
            day: "/ día",
            includes: "Incluye casco y candado.",
            btn: "Reservar por WhatsApp"
          },
          premium: {
            badge: "Motor Bosch",
            title: "E-bike Premium (Motor Bosch)",
            desc: "Máxima potencia y fiabilidad con motor central Bosch. Ideal para rutas largas o terrenos con más desnivel. Mayor autonomía y confort superior.",
            rateDay: "Tarifa por día",
            rent1to4: "Alquiler de 1 a 4 días",
            priceStd: "Precio estándar",
            day: "/ día",
            promo: "¡Promoción!",
            rateReduced: "Tarifa reducida (5 días o más)",
            rent5plus: "Alquiler de 5+ días",
            pricePerDay: "Precio por día",
            save: "Ahorra",
            includes: "Incluye casco y candado. El precio promocional se consigue al alquilar la E-bike Bosch por 5 días consecutivos o más.",
            btn: "Reservar por WhatsApp"
          }
        }
      },
      info: { title: "Información importante", id: "Se requiere un documento de identidad (DNI o pasaporte) para el alquiler.", deposit: "Depósito reembolsable en efectivo o tarjeta al recoger la bici.", minors: "Los menores de 14 años deben ir acompañados de un adulto.", rain: "En caso de lluvia, consulta disponibilidad y condiciones." },
      btnWa: "Reservar por WhatsApp",
      aviso: {
        title: "Condiciones generales de alquiler",
        horario: "El período de alquiler abarca siempre de las 10:00 h a las 19:00 h, con independencia de la hora de recogida. Esto aplica tanto a bicicletas de paseo como a eléctricas. Por ejemplo, una bicicleta de paseo alquilada un miércoles por 7 días podrá devolverse el martes siguiente antes de las 19:00 h, o bien el miércoles a las 10:00 h. Cualquier devolución fuera de estos horarios conllevará el cargo automático de un día adicional.",
        ebike: "Para alquilar bicicletas eléctricas es imprescindible presentar DNI o Pasaporte original en vigor, así como una tarjeta de crédito física. No se aceptan tarjetas virtuales ni de prepago.",
        ebikeRetorno: "Las bicicletas eléctricas deben devolverse obligatoriamente el último día contratado antes de las 19:00 h, ya que necesitan cargarse durante la noche. A diferencia de las bicicletas de paseo, no es posible la devolución a la mañana siguiente. El incumplimiento de este horario conllevará el cargo de un día adicional de alquiler."
      }
    },
    reparaciones: {
      header: { title: "Reparaciones", subtitle: "Taller especializado en todo tipo de bicicletas. Cada reparación se hace con rigor, experiencia y recambios originales." },
      workshop: { title: "Servicio fiable y profesional", desc: "En nuestro taller trabajamos con todo tipo de bicicletas: de paseo, montaña, carretera y eléctricas. Cada trabajo se revisa antes de salir del taller y siempre te informamos antes de hacer nada.", points: ["Diagnóstico honesto y sin sorpresas", "Presupuesto previo y sin compromiso", "Componentes de calidad contrastada", "Técnicos con años de experiencia en todo tipo de bicis"] },
      plans: { title: "Planes de mantenimiento", btnProcess: "Ver proceso de reparación", btnClose: "Cerrar", note: "* No se incluyen retenes ni componentes de reemplazo.", btnWa: "Solicitar cita para taller" },
      packages: {
        bronce: { name: "Bronce", features: ["Ajuste total de la bicicleta", "Checkeo de seguridad"] },
        plata: { name: "Plata", features: ["Incluye paquete Bronce", "Limpieza de transmisión"] },
        gold: { name: "Gold", features: ["Incluye paquete Plata", "Limpieza total de la bici", "Sustitución de cables de cambios (si fuera necesario)", "Checkeo de pedalier, dirección y bujes"] },
        platinum: { name: "Platinum", features: ["Incluye paquete Gold", "Revisión de suspensiones", "Revisión de basculante", "Sangrado de frenos"], note: "* No se incluyen retenes ni componentes de reemplazo." }
      },
      expandedView: {
        process: "Proceso", closePanel: "Cerrar panel ✕", photo: "Foto", size: "Tamaño recomendado: 1200x900px", stepDesc: "Descripción del paso",
        placeholderDesc: "[Añadir descripción detallada del paso para la tarifa. Aquí puedes explicar a fondo qué se le hace a la bicicleta, qué herramientas se utilizan y por qué es importante este paso para asegurar el correcto mantenimiento.]"
      },
      turnaround: {
        title: "Tiempos de entrega",
        desc: "Las reparaciones básicas se realizan en el momento. En caso de una avería más compleja, le indicaremos un plazo aproximado de tiempo. Si la bicicleta requiere algún trabajo o pieza extra no contemplada, siempre le contactaremos previamente para aprobar el nuevo presupuesto."
      },
      limpieza: {
        title: "Limpieza",
        packages: {
          transmision: { name: "Limpieza de Transmisión", features: ["Desengrasado completo de cadena, piñones y platos", "Lubricación profesional", "Ajuste básico de cambios"] },
          completa: { name: "Limpieza Completa", features: ["Lavado a mano de la bicicleta entera", "Limpieza de transmisión incluida", "Secado y abrillantado del cuadro", "Lubricación de componentes"] }
        }
      }
    },
    quienesSomos: {
      header: { title: "Nuestra historia", subtitle: "Un negocio familiar nacido del amor por las bicis y por el paseo marítimo de San Pedro Alcántara." },
      bio: { title: "Gab lleva toda la vida con las bicis", desc1: "Gabriel Sarria lleva años trabajando en el mundo de la bicicleta. Empezó compitiendo en descenso, lo que le dió un conocimiento técnico que muy pocos tienen. Con el tiempo, ese conocimiento lo llevó al taller: durante años fue el mecánico de Bike Base, donde ha reparado todo tipo de bicis para todo tipo de ciclistas.", desc2: "Parte de su formación la hizo en el extranjero, donde aprendió a trabajar con los estándares de reparación de distintos países. Esa experiencia es la que trae ahora a Gravitate Bikes: un sitio donde hacer las cosas bien, sin más complicaciones." },
      values: { title: "Nuestros Valores", subtitle: "Lo que nos mueve cada día", q1: { title: "Calidad profesional", desc: "Aplicamos los estándares de la alta competición a cada bicicleta que entra en nuestro taller." }, q2: { title: "Trato cercano", desc: "Somos una familia ciclista. Queremos que te sientas como en casa cada vez que nos visitas." }, q3: { title: "Pasión", desc: "No es solo nuestro trabajo, es nuestra forma de vida. Amamos cada aspecto del ciclismo." } },
      workshop: { title: "Nuestro taller", desc: "Nuestro espacio de trabajo está equipado con las mejores herramientas para garantizar una reparación precisa y de calidad. Nos aseguramos de que cada bicicleta salga en perfectas condiciones.", btnWa: "Contactar por WhatsApp", findUs: "Encuéntranos junto al bulevar", location: "Bulevar de San Pedro Alcántara, Marbella" },
      stats: { y28: "Años de experiencia", ref: "Años de referente en Andalucía", cup: "Copa de Descenso (ESP y PT)", fac: "Monitor de Ciclismo Oficial" }
    },
    contacto: {
      header: { title: "¿Dónde estamos?", subtitle: "El taller se encuentra junto al bulevar de San Pedro Alcántara. Pásate por el local o contáctanos por cualquiera de estos medios." },
      address: "Dirección",
      phone: "Teléfono",
      email: "Email",
      hours: "Horario",
      waBtn: "Escríbenos por WhatsApp",
      weekdays: "Lunes – Viernes",
      saturday: "Sábados",
      sunday: "Domingos y festivos"
    },
    woom: {
      header: { title: "Bicis Woom", subtitle: "Las mejores bicicletas ultraligeras para niños. Diseñadas para que aprender a pedalear sea fácil, seguro y divertido.", cta: "Preguntar por WhatsApp" },
      why: "¿Por qué woom?",
      range: "Bicis para niños",
      rangeDesc: "Una bici para cada etapa, de 1,5 a 14 años. También disponemos de toda la gama de accesorios originales woom.",
      desc: "Las bicicletas Woom están diseñadas específicamente para la anatomía de los niños. Son hasta un 40% más ligeras que las bicicletas infantiles convencionales, lo que hace que aprender a montar sea más fácil, rápido y seguro.",
      features: { weight: "Ultraligeras", weightDesc: "Fáciles de manejar y levantar", ergonomics: "Ergonomía infantil", ergonomicsDesc: "Geometría adaptada a su cuerpo", brakes: "Frenos especiales", brakesDesc: "Palancas adaptadas para manos pequeñas" },
      pricing: { title: "Tarifas Woom", price: "18 €", day: "/ día", btnWa: "Consultar disponibilidad" },
      models: {
        w1: { type: "Bici sin pedales", age: "1,5 – 3 años", desc: "La primera bici de tu hijo. Sin pedales para aprender el equilibrio de forma natural y segura." },
        w2: { type: "Con pedales", age: "3 – 4,5 años", desc: "Ligera y fácil de manejar. Da el salto a los pedales con total confianza." },
        w3: { type: "Con pedales", age: "4 – 6 años", desc: "Más velocidad, más aventuras. Con frenos de mano adaptados a manos pequeñas." },
        w4: { type: "Con pedales", age: "6 – 8 años", desc: "El paso a ruedas grandes. Cambios de marchas y geometría optimizada para niños." },
        w5: { type: "Con pedales", age: "8 – 11 años", desc: "Para los que ya pedalean fuerte. Componentes de calidad y bajo peso." },
        w6: { type: "Con pedales", age: "10 – 14 años", desc: "Casi una bici de adulto. Perfecta para los ciclistas jóvenes más exigentes." },
        woff: { type: "Mountain bike", age: "4 – 14 años", desc: "Diseñada para el monte. Neumáticos anchos, suspensión y manejo fuera del asfalto." },
        wup: { type: "E-bike infantil", age: "8 – 14 años", desc: "Con asistencia eléctrica suave para que puedan acompañarte en las rutas más largas." }
      },
      ctaBottom: { title: "¿No sabes qué talla elegir?", desc: "Pásate por Gravitate Bikes y te ayudamos a encontrar la bici woom perfecta para tu hijo. Tenemos exposición en tienda y asesoramiento personalizado sin compromiso.", btn: "Visítanos en tienda" }
    },
    footer: "© 2026 Gravitate Bikes · Av. Lopez de Mena nº 14, San Pedro Alcántara · Todos los derechos reservados",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos y Condiciones",
    privacidad: {
      breadcrumb: "Legal",
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: junio de 2026",
      intro: "En Gravitate Bikes nos tomamos muy en serio la privacidad de nuestros usuarios. A continuación te explicamos de forma clara qué información recopilamos, con qué finalidad y cómo la tratamos.",
      s1: {
        title: "1. Responsable del tratamiento",
        body: "El responsable del tratamiento de los datos personales es:",
        rows: [
          { label: "Negocio", value: "Gravitate Bikes" },
          { label: "Dirección", value: "Av. Lopez de Mena nº 14, 29670 San Pedro Alcántara, Marbella" },
          { label: "Email", value: "gravitatebikes@gmail.com" },
          { label: "Teléfono", value: "+34 612 47 78 41" }
        ]
      },
      s2: {
        title: "2. Cookies",
        noCookies: "Gravitate Bikes no utiliza cookies propias ni sistemas de rastreo de ningún tipo en este sitio web. No instalamos cookies de análisis, marketing ni de preferencias.",
        googleMapsLabel: "Google Maps:",
        googleMaps: "Esta web embebe un mapa de Google Maps en la página de contacto para facilitar la localización de nuestra tienda. Google Maps puede establecer cookies de terceros sobre las que Gravitate Bikes no tiene control ni responsabilidad. Si lo deseas, puedes consultar la política de privacidad de Google para más información.",
        googleLink: "Ver política de privacidad de Google →"
      },
      s3: {
        title: "3. Comunicación por WhatsApp",
        body: "Ofrecemos la posibilidad de contactar con nosotros a través de WhatsApp para realizar reservas, consultas y gestionar servicios de taller. Los datos que facilitas a través de WhatsApp (como tu nombre y número de teléfono) se utilizan exclusivamente con fines profesionales y para atender tu solicitud:",
        bullets: [
          "Gestión de reservas de bicicletas y citas de taller.",
          "Respuesta a consultas sobre productos o servicios.",
          "No se ceden a terceros ni se utilizan con fines comerciales."
        ]
      },
      s4: {
        title: "4. Datos recogidos a través del sitio web",
        body: "Más allá del uso de Google Maps descrito anteriormente, este sitio web no recoge, almacena ni procesa ningún dato personal de forma directa. No disponemos de formularios de contacto propios ni sistemas de registro de usuarios."
      },
      s5: {
        title: "5. Tus derechos",
        body: "Tienes derecho a acceder, rectificar, suprimir y oponerte al tratamiento de tus datos personales en los términos previstos por la normativa vigente (RGPD y LOPDGDD). Para ejercer estos derechos, puedes contactarnos en:"
      },
      s6: {
        title: "6. Cambios en esta política",
        body: "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier modificación se publicará en esta misma página con la fecha de última actualización indicada al inicio."
      },
      footer: "Gravitate Bikes · San Pedro Alcántara, Marbella"
    },
    terminos: {
      breadcrumb: "Legal",
      title: "Términos y Condiciones de Alquiler",
      lastUpdated: "Última actualización: agosto de 2026",
      intro: "El presente documento recoge las condiciones generales que regulan el servicio de alquiler de bicicletas ofrecido por Gravitate Bikes. Al formalizar un alquiler, el cliente acepta íntegramente las condiciones aquí descritas.",
      s1: {
        title: "1. Horario del servicio",
        body: "El período de alquiler cubre siempre de las 10:00 h a las 19:00 h, con independencia de la hora a la que se efectúe la recogida de la bicicleta. A efectos de cómputo de días, cada día de alquiler comienza a las 10:00 h y finaliza a las 19:00 h del mismo día.",
        example: "Ejemplo: si un cliente recoge la bicicleta un miércoles a las 17:00 h y contrata 7 días de alquiler, el último día de uso es el martes siguiente. La devolución deberá realizarse antes de las 19:00 h de ese martes, o bien a partir de las 10:00 h del miércoles siguiente, según convenga al cliente y esté previamente acordado con el establecimiento."
      },
      s2: {
        title: "2. Requisitos para el alquiler de bicicletas eléctricas",
        body: "Para el alquiler de bicicletas eléctricas (e-bikes) es imprescindible cumplir los siguientes requisitos:",
        bullets: [
          "Presentar DNI o Pasaporte original en vigor. No se aceptarán fotocopias ni documentos caducados.",
          "Disponer de una tarjeta de crédito física a nombre del titular del alquiler. No se aceptan tarjetas virtuales, monederos electrónicos ni tarjetas de prepago.",
          "Dejar un depósito de garantía reembolsable, cuyo importe se comunicará en el momento de la reserva."
        ]
      },
      s3: {
        title: "3. Devolución y penalizaciones por retraso",
        body: "La bicicleta deberá devolverse en el plazo acordado. La devolución fuera del horario establecido (después de las 19:00 h) implicará el cargo automático de un día adicional de alquiler. En caso de no devolución o extravío, el cliente será responsable del valor de reposición de la bicicleta."
      },
      s4: {
        title: "4. Estado de la bicicleta y responsabilidades",
        body: "El cliente recibirá la bicicleta en perfecto estado de funcionamiento y será responsable de su cuidado durante el período de alquiler. Cualquier daño, deterioro anormal o pérdida de accesorios (casco, candado, etc.) será imputado al cliente. Se realizará una revisión del estado de la bicicleta en el momento de la recogida y de la devolución."
      },
      s5: {
        title: "5. Uso de la bicicleta",
        body: "Las bicicletas alquiladas están destinadas al uso personal y recreativo del cliente. Queda expresamente prohibido:",
        bullets: [
          "Subalquilar o ceder la bicicleta a terceros.",
          "Utilizarla en competiciones, pruebas deportivas o actividades de alto riesgo.",
          "Realizar modificaciones en la bicicleta."
        ]
      },
      s6: {
        title: "6. Cancelaciones",
        body: "Las condiciones de cancelación se acordarán en el momento de la reserva. Gravitate Bikes se reserva el derecho de cancelar o modificar el servicio en circunstancias excepcionales (condiciones meteorológicas adversas, causas de fuerza mayor, etc.), informando al cliente con la mayor antelación posible."
      },
      s7: {
        title: "7. Modificaciones",
        body: "Gravitate Bikes se reserva el derecho de actualizar estas condiciones en cualquier momento. La versión vigente estará siempre disponible en esta página."
      },
      footer: "Gravitate Bikes · San Pedro Alcántara, Marbella"
    }
  },
  en: {
    nav: {
      inicio: "Home",
      alquiler: "Rentals",
      reparaciones: "Repairs",
      woom: "Woom Kids Bikes",
      quienesSomos: "About Us",
      contacto: "Contact",
    },
    home: {
      hero: {
        location: "San Pedro Alcántara · Marbella",
        title1: "Visit Marbella",
        title2: "by bicycle",
        btnRent: "View rental rates",
        btnRepair: "Repairs",
      },
      services: {
        title: "Enjoy Marbella in a different way",
        subtitle: "Discover Marbella in a different and sustainable way. Bike rentals and fast repairs so you don't lose a minute.",
        rent: { title: "Daily bike rental", desc: "Comfortable and light bikes, perfect for exploring the promenade at your own pace.", btn: "View rates" },
        repair: { title: "Repair Shop", desc: "Fast and professional repairs. Punctures, brakes, gear shifts, and much more.", btn: "View services" },
        clean: { title: "Cleaning Service", desc: "Make it look like new. Drivetrain cleaning for 15€ and full bike cleaning for 20€.", btn: "Request appointment" }
      },
      whyUs: {
        title: "Why choose us?",
        subtitle: "Committed to your experience on the San Pedro promenade.",
        loc: { title: "Unbeatable location", desc: "In the heart of the San Pedro Alcántara promenade." },
        hours: { title: "Open every day", desc: "Available throughout the season so you never miss a ride." },
        condition: { title: "Bikes in perfect condition", desc: "Constant maintenance so your experience is always safe and comfortable." },
        ages: { title: "From 15€ per day", desc: "Unbeatable prices to explore Marbella by bike. No surprises, no hidden fees." },
        fast: { title: "Fast workshop", desc: "On-the-spot repairs so you don't waste time and get back to riding right away." },
        support: { title: "Personalized attention", desc: "We advise you on routes and recommend the best option according to your needs." }
      },
      cta: {
        title: "Ready to ride?",
        subtitle: "Contact us without obligation or book your bicycle right now.",
        btnWa: "Book via WhatsApp",
        btnLoc: "Where are we?"
      }
    },
    alquiler: {
      header: { title: "Rent your bike", subtitle: "Choose between our city bikes and e-bikes to enjoy the promenade at your pace." },
      paseo: { title: "City Bike", desc: "Comfortable and lightweight, perfect for exploring the San Pedro Alcántara promenade. Includes helmet and lock.", priceDay: "Daily rate", priceDayDesc: "1 to 6 days rental", priceWeek: "Weekly rate (7+ days)", priceWeekDesc: "Save 33%", note: "Includes helmet and lock. Weekly price applies from the 7th consecutive day of rental." },
      ebike: {
        title: "Electric Bicycles (E-bikes)",
        warning: "To rent electric bicycles, an original ID/Passport and a physical credit card are required. Rental hours are from 10:00 to 19:30. If the bike is returned after 19:30, the following day will be charged.",
        aviso: "Important notice:",
        models: {
          basica: {
            title: "Basic E-bike",
            desc: "Perfect for moving effortlessly around the city and the promenade. Battery with good range to enjoy the whole day.",
            rateDay: "Daily rate",
            priceStd: "Standard price",
            perDay: "Per rental day",
            day: "/ day",
            includes: "Helmet and lock included.",
            btn: "Book via WhatsApp"
          },
          premium: {
            badge: "Bosch Motor",
            title: "Premium E-bike (Bosch Motor)",
            desc: "Maximum power and reliability with Bosch mid-drive motor. Ideal for long routes or hillier terrain. Greater range and superior comfort.",
            rateDay: "Daily rate",
            rent1to4: "1 to 4 days rental",
            priceStd: "Standard price",
            day: "/ day",
            promo: "Promotion!",
            rateReduced: "Reduced rate (5 days or more)",
            rent5plus: "5+ days rental",
            pricePerDay: "Price per day",
            save: "Save",
            includes: "Helmet and lock included. The promotional price is obtained by renting the Bosch E-bike for 5 consecutive days or more.",
            btn: "Book via WhatsApp"
          }
        }
      },
      info: { title: "Important Information", id: "An ID document (ID card or Passport) is required for rental.", deposit: "Refundable deposit in cash or card when picking up the bike.", minors: "Children under 14 must be accompanied by an adult.", rain: "In case of rain, please check availability and conditions." },
      btnWa: "Book via WhatsApp",
      aviso: {
        title: "General Rental Conditions",
        horario: "The rental period always runs from 10:00 to 19:00, regardless of the pick-up time. This applies to both regular and electric bicycles. For example, a regular bike rented on a Wednesday for 7 days may be returned the following Tuesday before 19:00, or on Wednesday at 10:00. Any return outside these hours will automatically incur a charge for an additional day.",
        ebike: "To rent electric bicycles, an original, valid ID card or Passport must be presented, along with a physical credit card. Virtual and prepaid cards are not accepted.",
        ebikeRetorno: "Electric bicycles must be returned on the last contracted day before 19:00, as they need to charge overnight. Unlike regular bikes, the next-morning return option is not available for e-bikes. Failure to comply with this return time will result in a charge for an additional rental day."
      }
    },
    reparaciones: {
      header: { title: "Repairs", subtitle: "Specialized workshop for all types of bicycles. Every repair is done with precision, experience and original spare parts." },
      workshop: { title: "Reliable and professional service", desc: "In our workshop, we work with all types of bicycles: city, mountain, road, and e-bikes. Every job is checked before it leaves the workshop, and we always keep you informed before doing anything.", points: ["Honest diagnosis, no surprises", "Free quote before any work", "Proven quality components", "Technicians with years of experience across all bike types"] },
      plans: { title: "Maintenance Plans", btnProcess: "View repair process", btnClose: "Close", note: "* Seals and replacement components are not included.", btnWa: "Request workshop appointment" },
      packages: {
        bronce: { name: "Bronze", features: ["Full bicycle adjustment", "Safety check"] },
        plata: { name: "Silver", features: ["Includes Bronze package", "Drivetrain cleaning"] },
        gold: { name: "Gold", features: ["Includes Silver package", "Full bike cleaning", "Gear cable replacement (if necessary)", "Bottom bracket, headset, and hub check"] },
        platinum: { name: "Platinum", features: ["Includes Gold package", "Suspension service", "Linkage check", "Brake bleed"], note: "* Seals and replacement components are not included." }
      },
      expandedView: {
        process: "Process", closePanel: "Close panel ✕", photo: "Photo", size: "Recommended size: 1200x900px", stepDesc: "Step description",
        placeholderDesc: "[Add detailed description of the step for the rate. Here you can fully explain what is done to the bike, what tools are used and why this step is important to ensure proper maintenance.]"
      },
      turnaround: {
        title: "Turnaround times",
        desc: "Basic repairs are done on the spot. For more complex faults, we will give you an estimated timeframe. If the bicycle requires any unforeseen extra work or parts, we will always contact you beforehand to approve the new quote."
      },
      limpieza: {
        title: "Cleaning",
        packages: {
          transmision: { name: "Drivetrain Cleaning", features: ["Complete degreasing of chain, cassette, and chainrings", "Professional lubrication", "Basic gear adjustment"] },
          completa: { name: "Full Bike Cleaning", features: ["Hand wash of the entire bicycle", "Drivetrain cleaning included", "Frame drying and polishing", "Component lubrication"] }
        }
      }
    },
    quienesSomos: {
      header: { title: "Our History", subtitle: "A family business born from the love of bikes and the San Pedro Alcántara promenade." },
      bio: { title: "Gab has been around bikes his whole life", desc1: "Gabriel Sarria has spent years working in the world of bicycles. He started out competing in downhill, which gave him a technical knowledge that very few people have. Over time, that knowledge moved into the workshop: he spent years as the mechanic at Bike Base, where he has repaired all kinds of bikes for all kinds of riders.", desc2: "Part of his training took him abroad, where he learned to work to the repair standards of different countries. That experience is what he now brings to Gravitate Bikes: a place where things are done properly, without any fuss." },
      values: { title: "Our Values", subtitle: "What moves us every day", q1: { title: "Professional quality", desc: "We apply the standards of high competition to every bicycle that enters our workshop." }, q2: { title: "Friendly service", desc: "We are a cycling family. We want you to feel at home every time you visit us." }, q3: { title: "Passion", desc: "It's not just our job, it's our way of life. We love every aspect of cycling." } },
      workshop: { title: "Our workshop", desc: "Our workspace is equipped with the best tools to ensure precise and high-quality repairs. We make sure every bicycle leaves in perfect condition.", btnWa: "Contact via WhatsApp", findUs: "Find us next to the boulevard", location: "Bulevar de San Pedro Alcántara, Marbella" },
      stats: { y28: "Years of experience", ref: "Years as a reference in Andalusia", cup: "Downhill Cup (ESP & PT)", fac: "Official Cycling Instructor" }
    },
    contacto: {
      header: { title: "Where are we?", subtitle: "Our workshop is located next to the boulevard of San Pedro Alcántara. Drop by or contact us through any of these means." },
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Opening Hours",
      waBtn: "Message us on WhatsApp",
      weekdays: "Monday – Friday",
      saturday: "Saturdays",
      sunday: "Sundays & Holidays"
    },
    woom: {
      header: { title: "Woom Bikes", subtitle: "The best ultralight bicycles for children. Designed to make learning to ride easy, safe, and fun.", cta: "Ask via WhatsApp" },
      why: "Why woom?",
      range: "Kids Bikes",
      rangeDesc: "A bike for every stage, from 1.5 to 14 years. We also have the full range of original woom accessories.",
      desc: "Woom bikes are specifically designed for children's anatomy. They are up to 40% lighter than conventional children's bikes, making learning to ride easier, faster, and safer.",
      features: { weight: "Ultralight", weightDesc: "Easy to handle and lift", ergonomics: "Child ergonomics", ergonomicsDesc: "Geometry adapted to their bodies", brakes: "Special brakes", brakesDesc: "Levers adapted for small hands" },
      pricing: { title: "Woom Rates", price: "18 €", day: "/ day", btnWa: "Ask for stock" },
      models: {
        w1: { type: "Balance bike", age: "1.5 – 3 years", desc: "Your child's first bike. No pedals, to learn balance naturally and safely." },
        w2: { type: "Pedal bike", age: "3 – 4.5 years", desc: "Lightweight and easy to handle. Make the leap to pedals with total confidence." },
        w3: { type: "Pedal bike", age: "4 – 6 years", desc: "More speed, more adventures. With hand brakes adapted for small hands." },
        w4: { type: "Pedal bike", age: "6 – 8 years", desc: "The step up to big wheels. Gears and optimized geometry for kids." },
        w5: { type: "Pedal bike", age: "8 – 11 years", desc: "For strong pedalers. Quality components and low weight." },
        w6: { type: "Pedal bike", age: "10 – 14 years", desc: "Almost an adult bike. Perfect for the most demanding young cyclists." },
        woff: { type: "Mountain bike", age: "4 – 14 years", desc: "Designed for the trail. Wide tires, suspension, and off-road handling." },
        wup: { type: "Kids E-bike", age: "8 – 14 years", desc: "With smooth electric assistance so they can join you on the longest routes." }
      },
      ctaBottom: { title: "Not sure which size to choose?", desc: "Stop by Gravitate Bikes and we'll help you find the perfect woom bike for your child. We have in-store displays and personalized advice with no commitment.", btn: "Visit our store" }
    },
    footer: "© 2026 Gravitate Bikes · Av. Lopez de Mena 14, San Pedro Alcántara · All rights reserved",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
    privacidad: {
      breadcrumb: "Legal",
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 2026",
      intro: "At Gravitate Bikes we take the privacy of our users very seriously. Below we explain clearly what information we collect, for what purpose, and how we handle it.",
      s1: {
        title: "1. Data Controller",
        body: "The data controller for personal data is:",
        rows: [
          { label: "Business", value: "Gravitate Bikes" },
          { label: "Address", value: "Av. Lopez de Mena 14, 29670 San Pedro Alcántara, Marbella" },
          { label: "Email", value: "gravitatebikes@gmail.com" },
          { label: "Phone", value: "+34 612 47 78 41" }
        ]
      },
      s2: {
        title: "2. Cookies",
        noCookies: "Gravitate Bikes does not use its own cookies or any kind of tracking system on this website. We do not install analytics, marketing, or preference cookies.",
        googleMapsLabel: "Google Maps:",
        googleMaps: "This website embeds a Google Maps map on the contact page to help you find our shop. Google Maps may set third-party cookies over which Gravitate Bikes has no control or responsibility. You can consult Google's privacy policy for more information.",
        googleLink: "View Google's privacy policy →"
      },
      s3: {
        title: "3. Communication via WhatsApp",
        body: "We offer the possibility of contacting us via WhatsApp to make reservations, ask questions, and arrange workshop appointments. The data you provide through WhatsApp (such as your name and phone number) is used exclusively for professional purposes to handle your request:",
        bullets: [
          "Managing bike rentals and workshop appointments.",
          "Responding to enquiries about products or services.",
          "It is not shared with third parties or used for commercial purposes."
        ]
      },
      s4: {
        title: "4. Data collected through the website",
        body: "Beyond the use of Google Maps described above, this website does not directly collect, store, or process any personal data. We do not have our own contact forms or user registration systems."
      },
      s5: {
        title: "5. Your rights",
        body: "You have the right to access, rectify, delete, and object to the processing of your personal data in accordance with applicable regulations (GDPR). To exercise these rights, please contact us at:"
      },
      s6: {
        title: "6. Changes to this policy",
        body: "We reserve the right to update this privacy policy at any time. Any changes will be published on this same page with the date of the last update shown at the top."
      },
      footer: "Gravitate Bikes · San Pedro Alcántara, Marbella"
    },
    terminos: {
      breadcrumb: "Legal",
      title: "Rental Terms & Conditions",
      lastUpdated: "Last updated: August 2026",
      intro: "This document sets out the general conditions governing the bicycle rental service offered by Gravitate Bikes. By completing a rental, the customer fully accepts the conditions described herein.",
      s1: {
        title: "1. Service Hours",
        body: "The rental period always covers from 10:00 to 19:00, regardless of the time the bicycle is collected. For billing purposes, each rental day begins at 10:00 and ends at 19:00 on the same day.",
        example: "Example: if a customer picks up the bicycle on a Wednesday at 17:00 and rents it for 7 days, the last day of use is the following Tuesday. The return must be made before 19:00 on that Tuesday, or from 10:00 on the following Wednesday, as agreed with the establishment."
      },
      s2: {
        title: "2. Requirements for Electric Bicycle Rental",
        body: "To rent electric bicycles (e-bikes), the following requirements must be met:",
        bullets: [
          "Present an original, valid ID card or Passport. Photocopies and expired documents will not be accepted.",
          "Provide a physical credit card in the name of the rental holder. Virtual wallets, e-money accounts, and prepaid cards are not accepted.",
          "Leave a refundable security deposit, the amount of which will be communicated at the time of booking."
        ]
      },
      s3: {
        title: "3. Return and Late Fees",
        body: "The bicycle must be returned within the agreed timeframe. A return outside the established hours (after 19:00) will automatically incur a charge for an additional rental day. In the event of non-return or loss, the customer will be liable for the replacement value of the bicycle."
      },
      s4: {
        title: "4. Bicycle Condition and Liability",
        body: "The customer will receive the bicycle in perfect working order and will be responsible for its care during the rental period. Any damage, abnormal wear, or loss of accessories (helmet, lock, etc.) will be charged to the customer. A condition check will be carried out at the time of collection and return."
      },
      s5: {
        title: "5. Use of the Bicycle",
        body: "Rented bicycles are intended for the customer's personal and recreational use. The following is expressly prohibited:",
        bullets: [
          "Subletting or transferring the bicycle to third parties.",
          "Using it in competitions, sporting events, or high-risk activities.",
          "Making modifications to the bicycle."
        ]
      },
      s6: {
        title: "6. Cancellations",
        body: "Cancellation conditions will be agreed at the time of booking. Gravitate Bikes reserves the right to cancel or modify the service under exceptional circumstances (adverse weather, force majeure, etc.), informing the customer as far in advance as possible."
      },
      s7: {
        title: "7. Amendments",
        body: "Gravitate Bikes reserves the right to update these conditions at any time. The current version will always be available on this page."
      },
      footer: "Gravitate Bikes · San Pedro Alcántara, Marbella"
    }
  },
  fr: {
    nav: {
      inicio: "Accueil",
      alquiler: "Locations",
      reparaciones: "Réparations",
      woom: "Vélos Enfants Woom",
      quienesSomos: "À propos",
      contacto: "Contact",
    },
    home: {
      hero: {
        location: "San Pedro Alcántara · Marbella",
        title1: "Visitez Marbella",
        title2: "à vélo",
        btnRent: "Voir les tarifs de location",
        btnRepair: "Réparations",
      },
      services: {
        title: "Profitez de Marbella d'une manière différente",
        subtitle: "Vélos de promenade et électriques à partir de 15€/jour. Explorez la promenade de Marbella à votre rythme, avec des prix clairs et un atelier sur place.",
        rent: { title: "Location de vélos à la journée", desc: "Des vélos confortables et légers, parfaits pour explorer la promenade à votre rythme.", btn: "Voir les tarifs" },
        repair: { title: "Atelier de réparation", desc: "Réparations rapides et professionnelles. Crevaisons, freins, changements de vitesse, et bien plus encore.", btn: "Voir les services" },
        clean: { title: "Service de nettoyage", desc: "Rendez-le comme neuf. Nettoyage de la transmission pour 15€ et nettoyage complet pour 20€.", btn: "Prendre rendez-vous" }
      },
      whyUs: {
        title: "Pourquoi nous choisir ?",
        subtitle: "Engagés pour votre expérience sur la promenade de San Pedro.",
        loc: { title: "Emplacement imbattable", desc: "Au cœur de la promenade de San Pedro Alcántara." },
        hours: { title: "Ouvert tous les jours", desc: "Disponibles toute la saison pour que vous ne manquiez aucune balade." },
        condition: { title: "Vélos en parfait état", desc: "Un entretien constant pour que votre expérience soit toujours sûre et confortable." },
        ages: { title: "À partir de 15€ par jour", desc: "Des prix imbattables pour explorer Marbella à vélo. Sans surprises, sans frais cachés." },
        fast: { title: "Atelier rapide", desc: "Réparations sur place pour ne pas perdre de temps et repartir rouler tout de suite." },
        support: { title: "Attention personnalisée", desc: "Nous vous conseillons sur les itinéraires et vous recommandons la meilleure option selon vos besoins." }
      },
      cta: {
        title: "Prêt à rouler ?",
        subtitle: "Contactez-nous sans engagement ou réservez votre vélo dès maintenant.",
        btnWa: "Réserver via WhatsApp",
        btnLoc: "Où sommes-nous ?"
      }
    },
    alquiler: {
      header: { title: "Louez votre vélo", subtitle: "Choisissez entre nos vélos de ville et électriques pour profiter de la promenade à votre rythme." },
      paseo: { title: "Vélo de ville", desc: "Confortable et léger, parfait pour explorer la promenade de San Pedro Alcántara. Comprend casque et cadenas.", priceDay: "Tarif journalier", priceDayDesc: "Location de 1 à 6 jours", priceWeek: "Tarif hebdomadaire (7+ jours)", priceWeekDesc: "Économisez 33%", note: "Comprend casque et cadenas. Le prix hebdomadaire s'applique à partir du 7ème jour consécutif." },
      ebike: {
        title: "Vélos Électriques (E-bikes)",
        warning: "Pour louer des vélos électriques, une pièce d'identité/passeport original et une carte de crédit physique sont requis. La location est de 10h00 à 19h30. Si le vélo est rendu après 19h30, le jour suivant sera facturé.",
        aviso: "Avis important :",
        models: {
          basica: {
            title: "E-bike Basique",
            desc: "Parfait pour se déplacer sans effort dans la ville et sur la promenade. Batterie avec une bonne autonomie pour profiter de toute la journée.",
            rateDay: "Tarif journalier",
            priceStd: "Prix standard",
            perDay: "Par jour de location",
            day: "/ jour",
            includes: "Casque et antivol inclus.",
            btn: "Réserver par WhatsApp"
          },
          premium: {
            badge: "Moteur Bosch",
            title: "E-bike Premium (Moteur Bosch)",
            desc: "Puissance et fiabilité maximales avec le moteur central Bosch. Idéal pour les longs trajets ou les terrains plus accidentés. Plus grande autonomie et confort supérieur.",
            rateDay: "Tarif journalier",
            rent1to4: "Location de 1 à 4 jours",
            priceStd: "Prix standard",
            day: "/ jour",
            promo: "Promotion !",
            rateReduced: "Tarif réduit (5 jours ou plus)",
            rent5plus: "Location de 5+ jours",
            pricePerDay: "Prix par jour",
            save: "Économisez",
            includes: "Casque et antivol inclus. Le prix promotionnel est obtenu en louant l'E-bike Bosch pendant 5 jours consécutifs ou plus.",
            btn: "Réserver par WhatsApp"
          }
        }
      },
      info: { title: "Informations importantes", id: "Une pièce d'identité (Carte d'identité ou Passeport) est requise pour la location.", deposit: "Caution remboursable en espèces ou par carte lors de la récupération du vélo.", minors: "Les enfants de moins de 14 ans doivent être accompagnés d'un adulte.", rain: "En cas de pluie, veuillez vérifier les disponibilités et les conditions." },
      btnWa: "Réserver via WhatsApp",
      aviso: {
        title: "Conditions générales de location",
        horario: "La période de location court toujours de 10h00 à 19h00, quelle que soit l'heure de prise en charge. Cela s'applique aussi bien aux vélos de ville qu'aux vélos électriques. Par exemple, un vélo de ville loué un mercredi pour 7 jours pourra être restitué le mardi suivant avant 19h00, ou le mercredi à 10h00. Toute restitution en dehors de ces horaires entraînera la facturation automatique d'un jour supplémentaire.",
        ebike: "Pour louer des vélos électriques, une pièce d'identité originale en cours de validité (carte d'identité ou passeport) ainsi qu'une carte de crédit physique sont obligatoires. Les cartes virtuelles et les cartes prépayées ne sont pas acceptées.",
        ebikeRetorno: "Les vélos électriques doivent impérativement être restituer le dernier jour contracté avant 19h00, car ils doivent être rechargés pendant la nuit. Contrairement aux vélos classiques, la restitution le lendemain matin n'est pas possible. Le non-respect de cet horaire entraînera la facturation d'un jour de location supplémentaire."
      }
    },
    reparaciones: {
      header: { title: "Réparations", subtitle: "Atelier spécialisé pour tous types de vélos. Chaque réparation est effectuée avec rigueur, expérience et des pièces de rechange d'origine." },
      workshop: { title: "Service fiable et professionnel", desc: "Dans notre atelier, nous travaillons avec tous types de vélos : ville, montagne, route et e-bikes. Chaque travail est vérifié avant de quitter l'atelier et nous vous informons toujours avant d'intervenir.", points: ["Diagnostic honnête, sans surprises", "Devis gratuit avant toute intervention", "Composants de qualité éprouvée", "Techniciens expérimentés sur tout type de vélo"] },
      plans: { title: "Plans d'entretien", btnProcess: "Voir le processus de réparation", btnClose: "Fermer", note: "* Les joints et composants de remplacement ne sont pas inclus.", btnWa: "Demander un rendez-vous à l'atelier" },
      packages: {
        bronce: { name: "Bronze", features: ["Réglage complet du vélo", "Contrôle de sécurité"] },
        plata: { name: "Argent", features: ["Comprend le forfait Bronze", "Nettoyage de la transmission"] },
        gold: { name: "Or", features: ["Comprend le forfait Argent", "Nettoyage complet du vélo", "Remplacement des câbles de vitesse (si nécessaire)", "Contrôle du boîtier de pédalier, de la direction et des moyeux"] },
        platinum: { name: "Platine", features: ["Comprend le forfait Or", "Révision des suspensions", "Contrôle de la biellette", "Purge des freins"], note: "* Les joints et composants de remplacement ne sont pas inclus." }
      },
      expandedView: {
        process: "Processus", closePanel: "Fermer le panneau ✕", photo: "Photo", size: "Taille recommandée : 1200x900px", stepDesc: "Description de l'étape",
        placeholderDesc: "[Ajoutez une description détaillée de l'étape pour le forfait. Ici, vous pouvez expliquer en détail ce qui est fait sur le vélo, quels outils sont utilisés et pourquoi cette étape est importante pour assurer un bon entretien.]"
      },
      turnaround: {
        title: "Délais de livraison",
        desc: "Les réparations de base sont effectuées sur place. Pour les pannes plus complexes, nous vous indiquerons un délai approximatif. Si le vélo nécessite des travaux ou des pièces supplémentaires imprévus, nous vous contacterons toujours au préalable pour approuver le nouveau devis."
      },
      limpieza: {
        title: "Nettoyage",
        packages: {
          transmision: { name: "Nettoyage de Transmission", features: ["Dégraissage complet de la chaîne, cassette et plateaux", "Lubrification professionnelle", "Ajustement de base des vitesses"] },
          completa: { name: "Nettoyage Complet", features: ["Lavage à la main du vélo entier", "Nettoyage de transmission inclus", "Séchage et lustrage du cadre", "Lubrification des composants"] }
        }
      }
    },
    quienesSomos: {
      header: { title: "Notre Histoire", subtitle: "Une entreprise familiale née de l'amour pour les vélos et la promenade de San Pedro Alcántara." },
      bio: { title: "Gab a passé toute sa vie avec les vélos", desc1: "Gabriel Sarria travaille dans le monde du vélo depuis des années. Il a commencé en compétant en descente, ce qui lui a donné une connaissance technique que très peu de personnes possèdent. Avec le temps, cette expérience l'a conduit à l'atelier : il a été pendant des années le mécanicien de Bike Base, où il a réparé toutes sortes de vélos pour toutes sortes de cyclistes.", desc2: "Une partie de sa formation s'est faite à l'étranger, où il a appris à travailler selon les normes de réparation de différents pays. C'est cette expérience qu'il apporte aujourd'hui à Gravitate Bikes : un endroit où le travail est bien fait, simplement." },
      values: { title: "Nos Valeurs", subtitle: "Ce qui nous motive chaque jour", q1: { title: "Qualité professionnelle", desc: "Nous appliquons les standards de la haute compétition à chaque vélo qui entre dans notre atelier." }, q2: { title: "Service convivial", desc: "Nous sommes une famille cycliste. Nous voulons que vous vous sentiez chez vous à chaque visite." }, q3: { title: "Passion", desc: "Ce n'est pas seulement notre travail, c'est notre mode de vie. Nous aimons chaque aspect du cyclisme." } },
      workshop: { title: "Notre atelier", desc: "Notre espace de travail est équipé des meilleurs outils pour garantir une réparation précise et de qualité. Nous veillons à ce que chaque vélo parte en parfait état.", btnWa: "Contacter par WhatsApp", findUs: "Retrouvez-nous à côté du boulevard", location: "Bulevar de San Pedro Alcántara, Marbella" },
      stats: { y28: "Années d'expérience", ref: "Années de référence en Andalousie", cup: "Coupe de Descente (ESP & PT)", fac: "Moniteur de Cyclisme Officiel" }
    },
    contacto: {
      header: { title: "Où sommes-nous ?", subtitle: "Notre atelier se trouve à côté du boulevard de San Pedro Alcántara. Passez à la boutique ou contactez-nous par l'un de ces moyens." },
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      hours: "Horaires",
      waBtn: "Écrivez-nous sur WhatsApp",
      weekdays: "Lundi – Vendredi",
      saturday: "Samedis",
      sunday: "Dimanches et jours fériés"
    },
    woom: {
      header: { title: "Vélos Woom", subtitle: "Les meilleurs vélos ultra-légers pour enfants. Conçus pour rendre l'apprentissage du vélo facile, sûr et amusant.", cta: "Demander via WhatsApp" },
      why: "Pourquoi woom ?",
      range: "Vélos pour enfants",
      rangeDesc: "Un vélo pour chaque étape, de 1,5 à 14 ans. Nous disposons également de toute la gamme d'accessoires originaux woom.",
      desc: "Les vélos Woom sont spécialement conçus pour l'anatomie des enfants. Ils sont jusqu'à 40 % plus légers que les vélos pour enfants classiques, ce qui rend l'apprentissage plus facile, rapide et sûr.",
      features: { weight: "Ultra-légers", weightDesc: "Faciles à manier et à soulever", ergonomics: "Ergonomie infantile", ergonomicsDesc: "Géométrie adaptée à leur corps", brakes: "Freins spéciaux", brakesDesc: "Leviers adaptés aux petites mains" },
      pricing: { title: "Tarifs Woom", price: "18 €", day: "/ jour", btnWa: "Réserver un vélo Woom" },
      models: {
        w1: { type: "Draisienne", age: "1,5 – 3 ans", desc: "Le premier vélo de votre enfant. Sans pédales pour apprendre l'équilibre naturellement." },
        w2: { type: "À pédales", age: "3 – 4,5 ans", desc: "Léger et facile à manier. Passez aux pédales en toute confiance." },
        w3: { type: "À pédales", age: "4 – 6 ans", desc: "Plus de vitesse, plus d'aventures. Avec des freins adaptés aux petites mains." },
        w4: { type: "À pédales", age: "6 – 8 ans", desc: "Le passage aux grandes roues. Vitesses et géométrie optimisée pour enfants." },
        w5: { type: "À pédales", age: "8 – 11 ans", desc: "Pour les jeunes cyclistes confirmés. Composants de qualité et faible poids." },
        w6: { type: "À pédales", age: "10 – 14 ans", desc: "Presque un vélo d'adulte. Parfait pour les jeunes cyclistes exigeants." },
        woff: { type: "VTT", age: "4 – 14 ans", desc: "Conçu pour la montagne. Pneus larges, suspension et conduite tout-terrain." },
        wup: { type: "E-bike enfant", age: "8 – 14 ans", desc: "Avec une assistance électrique douce pour vous accompagner sur les longs trajets." }
      },
      ctaBottom: { title: "Vous ne savez pas quelle taille choisir ?", desc: "Passez chez Gravitate Bikes et nous vous aiderons à trouver le vélo woom parfait pour votre enfant. Nous avons des modèles d'exposition en magasin et des conseils personnalisés sans engagement.", btn: "Visitez notre magasin" }
    },
    footer: "© 2026 Gravitate Bikes · Av. Lopez de Mena 14, San Pedro Alcántara · Tous droits réservés",
    footerPrivacy: "Politique de Confidentialité",
    footerTerms: "Conditions Générales",
    privacidad: {
      breadcrumb: "Mentions légales",
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : juin 2026",
      intro: "Chez Gravitate Bikes, nous prenons la confidentialité de nos utilisateurs très au sérieux. Vous trouverez ci-dessous une explication claire des informations que nous collectons, dans quel but et comment nous les traitons.",
      s1: {
        title: "1. Responsable du traitement",
        body: "Le responsable du traitement des données personnelles est :",
        rows: [
          { label: "Entreprise", value: "Gravitate Bikes" },
          { label: "Adresse", value: "Av. Lopez de Mena 14, 29670 San Pedro Alcántara, Marbella" },
          { label: "Email", value: "gravitatebikes@gmail.com" },
          { label: "Téléphone", value: "+34 612 47 78 41" }
        ]
      },
      s2: {
        title: "2. Cookies",
        noCookies: "Gravitate Bikes n'utilise pas de cookies propres ni aucun système de suivi sur ce site web. Nous n'installons pas de cookies analytiques, publicitaires ou de préférences.",
        googleMapsLabel: "Google Maps :",
        googleMaps: "Ce site web intègre une carte Google Maps sur la page de contact pour faciliter la localisation de notre boutique. Google Maps peut placer des cookies tiers sur lesquels Gravitate Bikes n'a aucun contrôle ni responsabilité. Vous pouvez consulter la politique de confidentialité de Google pour plus d'informations.",
        googleLink: "Voir la politique de confidentialité de Google →"
      },
      s3: {
        title: "3. Communication par WhatsApp",
        body: "Nous offrons la possibilité de nous contacter via WhatsApp pour effectuer des réservations, poser des questions et organiser des rendez-vous en atelier. Les données que vous fournissez via WhatsApp (comme votre nom et numéro de téléphone) sont utilisées exclusivement à des fins professionnelles pour traiter votre demande :",
        bullets: [
          "Gestion des réservations de vélos et des rendez-vous en atelier.",
          "Réponse aux demandes de renseignements sur les produits ou services.",
          "Elles ne sont pas partagées avec des tiers ni utilisées à des fins commerciales."
        ]
      },
      s4: {
        title: "4. Données collectées via le site web",
        body: "Au-delà de l'utilisation de Google Maps décrite ci-dessus, ce site web ne collecte, ne stocke ni ne traite directement aucune donnée personnelle. Nous ne disposons pas de formulaires de contact propres ni de systèmes d'inscription d'utilisateurs."
      },
      s5: {
        title: "5. Vos droits",
        body: "Vous avez le droit d'accéder, de rectifier, de supprimer et de vous opposer au traitement de vos données personnelles conformément à la réglementation en vigueur (RGPD). Pour exercer ces droits, veuillez nous contacter à :"
      },
      s6: {
        title: "6. Modifications de cette politique",
        body: "Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette même page avec la date de dernière mise à jour indiquée en haut."
      },
      footer: "Gravitate Bikes · San Pedro Alcántara, Marbella"
    },
    terminos: {
      breadcrumb: "Mentions légales",
      title: "Conditions Générales de Location",
      lastUpdated: "Dernière mise à jour : août 2026",
      intro: "Le présent document définit les conditions générales régissant le service de location de vélos proposé par Gravitate Bikes. En finalisant une location, le client accepte pleinement les conditions décrites ci-après.",
      s1: {
        title: "1. Horaires du service",
        body: "La période de location couvre toujours de 10h00 à 19h00, indépendamment de l'heure à laquelle le vélo est retiré. Pour le calcul des jours, chaque jour de location commence à 10h00 et se termine à 19h00 le même jour.",
        example: "Exemple : si un client prend son vélo un mercredi à 17h00 pour 7 jours, le dernier jour d'utilisation est le mardi suivant. La restitution doit être effectuée avant 19h00 ce mardi-là, ou à partir de 10h00 le mercredi suivant, selon l'accord préalable avec l'établissement."
      },
      s2: {
        title: "2. Conditions requises pour la location de vélos électriques",
        body: "Pour louer des vélos électriques (e-bikes), les conditions suivantes doivent être remplies :",
        bullets: [
          "Présenter une pièce d'identité originale en cours de validité (carte d'identité ou passeport). Les photocopies et les documents périmés ne sont pas acceptés.",
          "Fournir une carte de crédit physique au nom du titulaire de la location. Les portefeuilles virtuels, les comptes de monnaie électronique et les cartes prépayées ne sont pas acceptés.",
          "Laisser une caution remboursable, dont le montant sera communiqué au moment de la réservation."
        ]
      },
      s3: {
        title: "3. Restitution et pénalités de retard",
        body: "Le vélo doit être restitué dans les délais convenus. Une restitution en dehors des horaires établis (après 19h00) entraînera automatiquement la facturation d'un jour de location supplémentaire. En cas de non-restitution ou de perte, le client sera tenu responsable de la valeur de remplacement du vélo."
      },
      s4: {
        title: "4. État du vélo et responsabilités",
        body: "Le client recevra le vélo en parfait état de fonctionnement et sera responsable de son entretien pendant la durée de la location. Tout dommage, usure anormale ou perte d'accessoires (casque, cadenas, etc.) sera imputé au client. Un contrôle de l'état du vélo sera effectué au moment du retrait et de la restitution."
      },
      s5: {
        title: "5. Utilisation du vélo",
        body: "Les vélos loués sont destinés à un usage personnel et récréatif. Il est expressément interdit de :",
        bullets: [
          "Sous-louer ou céder le vélo à des tiers.",
          "L'utiliser dans des compétitions, épreuves sportives ou activités à haut risque.",
          "Apporter des modifications au vélo."
        ]
      },
      s6: {
        title: "6. Annulations",
        body: "Les conditions d'annulation seront convenues au moment de la réservation. Gravitate Bikes se réserve le droit d'annuler ou de modifier le service dans des circonstances exceptionnelles (conditions météorologiques défavorables, cas de force majeure, etc.), en informant le client dans les meilleurs délais."
      },
      s7: {
        title: "7. Modifications",
        body: "Gravitate Bikes se réserve le droit de mettre à jour ces conditions à tout moment. La version en vigueur sera toujours disponible sur cette page."
      },
      footer: "Gravitate Bikes · San Pedro Alcántara, Marbella"
    }
  },
  de: {
    nav: {
      inicio: "Startseite",
      alquiler: "Verleih",
      reparaciones: "Reparaturen",
      woom: "Woom Kinderräder",
      quienesSomos: "Über uns",
      contacto: "Kontakt",
    },
    home: {
      hero: {
        location: "San Pedro Alcántara · Marbella",
        title1: "Marbella entdecken",
        title2: "mit dem Fahrrad",
        btnRent: "Mietpreise ansehen",
        btnRepair: "Reparaturen",
      },
      services: {
        title: "Marbella auf eine andere Art erleben",
        subtitle: "Stadt- und Elektroräder ab 15 €/Tag. Erkunden Sie die Strandpromenade von Marbella ganz flexibel, mit transparenten Preisen und unserer eigenen Werkstatt.",
        rent: { title: "Tagesweiser Fahrradverleih", desc: "Komfortable und leichte Räder, ideal, um die Strandpromenade in Ihrem eigenen Tempo zu erkunden.", btn: "Preise ansehen" },
        repair: { title: "Reparaturwerkstatt", desc: "Schneller und professioneller Service. Reifenpannen, Bremsen, Gangschaltungen und vieles mehr.", btn: "Leistungen ansehen" },
        clean: { title: "Reinigungsservice", desc: "Wieder wie neu. Antriebsreinigung für 15 € und vollständige Fahrradreinigung für 20 €.", btn: "Termin anfragen" }
      },
      whyUs: {
        title: "Warum uns wählen?",
        subtitle: "Engagiert für Ihr Erlebnis auf der Strandpromenade von San Pedro.",
        loc: { title: "Unschlagbare Lage", desc: "Im Herzen der Strandpromenade von San Pedro Alcántara." },
        hours: { title: "Täglich geöffnet", desc: "Die ganze Saison über verfügbar, damit Sie keine Ausfahrt verpassen." },
        condition: { title: "Fahrräder in perfektem Zustand", desc: "Ständige Wartung für ein stets sicheres und komfortables Erlebnis." },
        ages: { title: "Ab 15 € pro Tag", desc: "Unschlagbare Preise, um Marbella per Rad zu erkunden. Keine Überraschungen, keine versteckten Kosten." },
        fast: { title: "Schnelle Werkstatt", desc: "Sofortreparaturen, damit Sie keine Zeit verlieren und sofort wieder fahren können." },
        support: { title: "Persönliche Beratung", desc: "Wir beraten Sie zu Routen und empfehlen die beste Option für Ihre Bedürfnisse." }
      },
      cta: {
        title: "Bereit zum Radfahren?",
        subtitle: "Kontaktieren Sie uns unverbindlich oder reservieren Sie Ihr Fahrrad jetzt.",
        btnWa: "Per WhatsApp buchen",
        btnLoc: "Wo sind wir?"
      }
    },
    alquiler: {
      header: { title: "Fahrrad mieten", subtitle: "Wählen Sie zwischen unseren Stadträdern und E-Bikes, um die Strandpromenade in Ihrem Tempo zu genießen." },
      paseo: { title: "Stadtrad", desc: "Komfortabel und leicht, ideal für die Strandpromenade von San Pedro Alcántara. Inklusive Helm und Schloss.", priceDay: "Tagespreis", priceDayDesc: "Miete von 1 bis 6 Tagen", priceWeek: "Wochenpreis (7+ Tage)", priceWeekDesc: "33% sparen", note: "Inklusive Helm und Schloss. Der Wochenpreis gilt ab dem 7. aufeinanderfolgenden Miettag." },
      ebike: {
        title: "Elektrofahrräder (E-Bikes)",
        warning: "Zum Mieten von Elektrofahrrädern sind ein gültiger Personalausweis/Reisepass und eine physische Kreditkarte erforderlich. Ein Miettag gilt von 10:00 bis 19:30 Uhr. Bei Rückgabe nach 19:30 Uhr wird der folgende Tag berechnet.",
        aviso: "Wichtiger Hinweis:",
        models: {
          basica: {
            title: "Basis E-Bike",
            desc: "Ideal für müheloses Fahren in der Stadt und auf der Promenade. Akku mit guter Reichweite für einen ganzen Tag.",
            rateDay: "Tagespreis",
            priceStd: "Standardpreis",
            perDay: "Pro Miettag",
            day: "/ Tag",
            includes: "Helm und Schloss inklusive.",
            btn: "Per WhatsApp buchen"
          },
          premium: {
            badge: "Bosch Motor",
            title: "Premium E-Bike (Bosch Motor)",
            desc: "Maximale Leistung und Zuverlässigkeit mit Bosch Mittelmotor. Ideal für lange Strecken oder hügeliges Gelände. Größere Reichweite und überlegener Komfort.",
            rateDay: "Tagespreis",
            rent1to4: "Miete von 1 bis 4 Tagen",
            priceStd: "Standardpreis",
            day: "/ Tag",
            promo: "Angebot!",
            rateReduced: "Vergünstigter Preis (5 Tage oder mehr)",
            rent5plus: "Miete ab 5+ Tagen",
            pricePerDay: "Preis pro Tag",
            save: "Sparen Sie",
            includes: "Helm und Schloss inklusive. Der Aktionspreis gilt bei Miete des Bosch E-Bikes für 5 aufeinanderfolgende Tage oder mehr.",
            btn: "Per WhatsApp buchen"
          }
        }
      },
      info: { title: "Wichtige Informationen", id: "Für die Miete ist ein Ausweisdokument (Personalausweis oder Reisepass) erforderlich.", deposit: "Kaution (in bar oder per Karte) ist bei Abholung zu hinterlegen.", minors: "Kinder unter 14 Jahren müssen von einem Erwachsenen begleitet werden.", rain: "Bei Regen bitte Verfügbarkeit und Bedingungen erfragen." },
      btnWa: "Per WhatsApp buchen",
      aviso: {
        title: "Allgemeine Mietbedingungen",
        horario: "Der Mietzeitraum läuft stets von 10:00 bis 19:00 Uhr, unabhängig von der Abholzeit. Dies gilt sowohl für Stadträder als auch für Elektrofahrräder. Ein Stadtrad, das zum Beispiel an einem Mittwoch für 7 Tage gemietet wird, kann am darauffolgenden Dienstag bis 19:00 Uhr oder am Mittwoch ab 10:00 Uhr zurückgegeben werden. Jede Rückgabe außerhalb dieser Zeiten führt automatisch zur Berechnung eines zusätzlichen Miettages.",
        ebike: "Für die Miete von Elektrofahrrädern sind ein gültiger Personalausweis oder Reisepass im Original sowie eine physische Kreditkarte erforderlich. Virtuelle Karten und Prepaid-Karten werden nicht akzeptiert.",
        ebikeRetorno: "Elektrofahrräder müssen zwingend am letzten gebuchten Miettag bis 19:00 Uhr zurückgegeben werden, da sie über Nacht aufgeladen werden müssen. Anders als bei normalen Fahrrädern ist eine Rückgabe am nächsten Morgen nicht möglich. Bei Nichteinhaltung dieser Rückgabezeit wird ein zusätzlicher Miettag berechnet."
      }
    },
    reparaciones: {
      header: { title: "Reparaturen", subtitle: "Spezialisierte Werkstatt für alle Fahrradtypen. Jede Reparatur wird mit Sorgfalt, Erfahrung und Originalersatzteilen durchgeführt." },
      workshop: { title: "Zuverlässiger und professioneller Service", desc: "In unserer Werkstatt arbeiten wir mit allen Fahrradtypen: Stadträder, Mountainbikes, Rennräder und E-Bikes. Jede Arbeit wird vor der Ausgabe geprüft und wir informieren Sie immer, bevor wir etwas unternehmen.", points: ["Ehrliche Diagnose, keine Überraschungen", "Kostenloser Kostenvoranschlag vor jeder Arbeit", "Bewährte Qualitätskomponenten", "Techniker mit jahrelanger Erfahrung mit allen Fahrradtypen"] },
      plans: { title: "Wartungspakete", btnProcess: "Reparaturprozess ansehen", btnClose: "Schließen", note: "* Dichtungen und Ersatzteile sind nicht inbegriffen.", btnWa: "Werkstatttermin anfragen" },
      packages: {
        bronce: { name: "Bronze", features: ["Vollständige Fahrradeinstellung", "Sicherheitskontrolle"] },
        plata: { name: "Silber", features: ["Inklusive Bronze-Paket", "Antriebsreinigung"] },
        gold: { name: "Gold", features: ["Inklusive Silber-Paket", "Vollständige Fahrradreinigung", "Schaltzugerneuerung (falls notwendig)", "Kontrolle von Tretlager, Steuersatz und Naben"] },
        platinum: { name: "Platin", features: ["Inklusive Gold-Paket", "Federungsüberprüfung", "Hinterbauüberprüfung", "Bremsenwartung (Entlüften)"], note: "* Dichtungen und Ersatzteile sind nicht inbegriffen." }
      },
      expandedView: {
        process: "Prozess", closePanel: "Bereich schließen ✕", photo: "Foto", size: "Empfohlene Größe: 1200x900px", stepDesc: "Schritt-Beschreibung",
        placeholderDesc: "[Fügen Sie eine detaillierte Beschreibung des Schritts hinzu. Hier können Sie genau erklären, was am Fahrrad gemacht wird, welche Werkzeuge verwendet werden und warum dieser Schritt für die ordnungsgemäße Wartung wichtig ist.]"
      },
      turnaround: {
        title: "Bearbeitungszeiten",
        desc: "Kleinere Reparaturen werden sofort durchgeführt. Bei komplexeren Schäden teilen wir Ihnen einen ungefähren Zeitrahmen mit. Falls das Fahrrad unvorhergesehene zusätzliche Arbeiten oder Teile benötigt, werden wir Sie immer vorher kontaktieren, um Ihre Freigabe für die zusätzlichen Arbeiten einzuholen."
      },
      limpieza: {
        title: "Reinigung",
        packages: {
          transmision: { name: "Antriebsreinigung", features: ["Vollständige Entfettung von Kette, Kassette und Kettenblättern", "Professionelle Schmierung", "Grundeinstellung der Schaltung"] },
          completa: { name: "Vollständige Fahrradreinigung", features: ["Handwäsche des gesamten Fahrrads", "Antriebsreinigung inklusive", "Rahmentrocknung und -politur", "Komponentenschmierung"] }
        }
      }
    },
    quienesSomos: {
      header: { title: "Unsere Geschichte", subtitle: "Ein Familienbetrieb, geboren aus der Liebe zu Fahrrädern und der Strandpromenade von San Pedro Alcántara." },
      bio: { title: "Gab hat sein ganzes Leben mit Fahrrädern verbracht", desc1: "Gabriel Sarria arbeitet seit Jahren in der Fahrradbranche. Er begann als Downhill-Rennfahrer, was ihm ein technisches Verständnis verschaffte, das nur wenige besitzen. Mit der Zeit führte ihn dieses Wissen in die Werkstatt: Jahrelang war er der Mechaniker bei Bike Base, wo er alle Arten von Rädern für alle Arten von Fahrern repariert hat.", desc2: "Einen Teil seiner Ausbildung absolvierte er im Ausland, wo er nach den Reparaturstandards verschiedener Länder arbeiten lernte. Diese Erfahrung bringt er jetzt zu Gravitate Bikes: ein Ort, an dem die Dinge richtig gemacht werden, ganz einfach." },
      values: { title: "Unsere Werte", subtitle: "Was uns jeden Tag antreibt", q1: { title: "Professionelle Qualität", desc: "Wir wenden die Standards des Hochleistungssports auf jedes Fahrrad an, das unsere Werkstatt betritt." }, q2: { title: "Freundlicher Service", desc: "Wir sind eine Radfamilie. Wir möchten, dass Sie sich bei jedem Besuch wie zu Hause fühlen." }, q3: { title: "Leidenschaft", desc: "Es ist nicht nur unser Beruf, es ist unsere Lebensweise. Wir lieben jeden Aspekt des Radsports." } },
      workshop: { title: "Unsere Werkstatt", desc: "Unser Arbeitsbereich ist mit den besten Werkzeugen ausgestattet, um präzise und hochwertige Reparaturen zu gewährleisten. Wir stellen sicher, dass jedes Fahrrad in einwandfreiem Zustand die Werkstatt verlässt.", btnWa: "Per WhatsApp kontaktieren", findUs: "Finden Sie uns neben dem Boulevard", location: "Bulevar de San Pedro Alcántara, Marbella" },
      stats: { y28: "Jahre Erfahrung", ref: "Jahre als Referenz in Andalusien", cup: "Downhill-Cup (ESP & PT)", fac: "Offizieller Radsport-Instructor" }
    },
    contacto: {
      header: { title: "Standort & Kontakt", subtitle: "Unsere Werkstatt befindet sich direkt am Boulevard von San Pedro Alcántara. Kommen Sie vorbei oder kontaktieren Sie uns über einen dieser Kanäle." },
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
      hours: "Öffnungszeiten",
      waBtn: "WhatsApp schreiben",
      weekdays: "Montag – Freitag",
      saturday: "Samstag",
      sunday: "Sonn- und Feiertage"
    },
    woom: {
      header: { title: "Woom Fahrräder", subtitle: "Die besten ultraleichten Fahrräder für Kinder. Entwickelt, um das Fahrradfahren lernen einfach, sicher und spaßig zu machen.", cta: "Per WhatsApp anfragen" },
      why: "Warum woom?",
      range: "Kinderräder",
      rangeDesc: "Ein Fahrrad für jede Etappe, von 1,5 bis 14 Jahren. Wir führen auch das komplette Sortiment an originalen woom-Zubehör.",
      desc: "Woom-Fahrräder sind speziell für die Anatomie von Kindern entwickelt. Sie sind bis zu 40 % leichter als herkömmliche Kinderräder, was das Radfahren lernen einfacher, schneller und sicherer macht.",
      features: { weight: "Ultraleicht", weightDesc: "Einfach zu handhaben und zu heben", ergonomics: "Kinderergonomie", ergonomicsDesc: "Auf ihren Körper abgestimmte Geometrie", brakes: "Spezielle Bremsen", brakesDesc: "Hebel für kleine Hände angepasst" },
      pricing: { title: "Woom-Tarife", price: "18 €", day: "/ Tag", btnWa: "Nach Verfügbarkeit fragen" },
      models: {
        w1: { type: "Laufrad", age: "1,5 – 3 Jahre", desc: "Das erste Fahrrad Ihres Kindes. Ohne Pedale, um das Gleichgewicht auf natürliche Weise zu lernen." },
        w2: { type: "Pedalrad", age: "3 – 4,5 Jahre", desc: "Leicht und einfach zu handhaben. Mit vollem Vertrauen auf Pedale umsteigen." },
        w3: { type: "Pedalrad", age: "4 – 6 Jahre", desc: "Mehr Geschwindigkeit, mehr Abenteuer. Mit Handbremsen für kleine Hände." },
        w4: { type: "Pedalrad", age: "6 – 8 Jahre", desc: "Der Schritt zu großen Rädern. Gangschaltung und optimierte Geometrie für Kinder." },
        w5: { type: "Pedalrad", age: "8 – 11 Jahre", desc: "Für starke Pedaleure. Qualitätskomponenten und geringes Gewicht." },
        w6: { type: "Pedalrad", age: "10 – 14 Jahre", desc: "Fast ein Erwachsenenrad. Perfekt für die anspruchsvollsten jungen Radfahrer." },
        woff: { type: "Mountainbike", age: "4 – 14 Jahre", desc: "Für das Gelände entwickelt. Breite Reifen, Federung und Geländehandling." },
        wup: { type: "Kinder E-Bike", age: "8 – 14 Jahre", desc: "Mit sanfter elektrischer Unterstützung, damit sie Sie auf den längsten Touren begleiten können." }
      },
      ctaBottom: { title: "Sie wissen nicht, welche Größe Sie wählen sollen?", desc: "Kommen Sie zu Gravitate Bikes und wir helfen Ihnen, das perfekte woom-Fahrrad für Ihr Kind zu finden. Wir haben Ausstellungsmodelle im Geschäft und persönliche Beratung ohne Verpflichtung.", btn: "Besuchen Sie unseren Shop" }
    },
    footer: "© 2026 Gravitate Bikes · Av. Lopez de Mena 14, San Pedro Alcántara · Alle Rechte vorbehalten",
    footerPrivacy: "Datenschutzerklärung",
    footerTerms: "Allgemeine Mietbedingungen",
    privacidad: {
      breadcrumb: "Rechtliches",
      title: "Datenschutzerklärung",
      lastUpdated: "Letzte Aktualisierung: Juni 2026",
      intro: "Bei Gravitate Bikes nehmen wir den Datenschutz unserer Nutzer sehr ernst. Im Folgenden erklären wir klar und verständlich, welche Informationen wir erheben, zu welchem Zweck und wie wir damit umgehen.",
      s1: {
        title: "1. Verantwortlicher für die Datenverarbeitung",
        body: "Der Verantwortliche für die Verarbeitung personenbezogener Daten ist:",
        rows: [
          { label: "Unternehmen", value: "Gravitate Bikes" },
          { label: "Adresse", value: "Av. Lopez de Mena 14, 29670 San Pedro Alcántara, Marbella" },
          { label: "E-Mail", value: "gravitatebikes@gmail.com" },
          { label: "Telefon", value: "+34 612 47 78 41" }
        ]
      },
      s2: {
        title: "2. Cookies",
        noCookies: "Gravitate Bikes verwendet keine eigenen Cookies oder sonstige Tracking-Systeme auf dieser Website. Wir setzen keine Analyse-, Marketing- oder Präferenz-Cookies ein.",
        googleMapsLabel: "Google Maps:",
        googleMaps: "Diese Website bindet auf der Kontaktseite eine Google Maps-Karte ein, um die Auffindbarkeit unseres Geschäfts zu erleichtern. Google Maps kann Drittanbieter-Cookies setzen, über die Gravitate Bikes keine Kontrolle oder Verantwortung hat. Weitere Informationen finden Sie in der Datenschutzrichtlinie von Google.",
        googleLink: "Datenschutzrichtlinie von Google ansehen →"
      },
      s3: {
        title: "3. Kommunikation per WhatsApp",
        body: "Wir bieten die Möglichkeit, uns über WhatsApp für Reservierungen, Anfragen und Werkstatttermine zu kontaktieren. Die Daten, die Sie über WhatsApp übermitteln (wie Ihr Name und Ihre Telefonnummer), werden ausschließlich für professionelle Zwecke zur Bearbeitung Ihrer Anfrage verwendet:",
        bullets: [
          "Verwaltung von Fahrradreservierungen und Werkstattterminen.",
          "Beantwortung von Anfragen zu Produkten oder Dienstleistungen.",
          "Sie werden nicht an Dritte weitergegeben oder zu kommerziellen Zwecken genutzt."
        ]
      },
      s4: {
        title: "4. Über die Website erhobene Daten",
        body: "Abgesehen von der oben beschriebenen Nutzung von Google Maps erhebt, speichert oder verarbeitet diese Website keine personenbezogenen Daten direkt. Wir verfügen weder über eigene Kontaktformulare noch über Benutzerregistrierungssysteme."
      },
      s5: {
        title: "5. Ihre Rechte",
        body: "Sie haben das Recht, gemäß den geltenden Vorschriften (DSGVO) auf Ihre personenbezogenen Daten zuzugreifen, diese zu berichtigen, zu löschen und der Verarbeitung zu widersprechen. Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter:"
      },
      s6: {
        title: "6. Änderungen dieser Richtlinie",
        body: "Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Alle Änderungen werden auf dieser Seite veröffentlicht, mit dem oben angegebenen Datum der letzten Aktualisierung."
      },
      footer: "Gravitate Bikes · San Pedro Alcántara, Marbella"
    },
    terminos: {
      breadcrumb: "Rechtliches",
      title: "Allgemeine Mietbedingungen",
      lastUpdated: "Letzte Aktualisierung: August 2026",
      intro: "Dieses Dokument legt die allgemeinen Bedingungen fest, die für den von Gravitate Bikes angebotenen Fahrradverleih gelten. Mit dem Abschluss einer Miete akzeptiert der Kunde die hier beschriebenen Bedingungen vollständig.",
      s1: {
        title: "1. Servicezeiten",
        body: "Der Mietzeitraum umfasst stets von 10:00 bis 19:00 Uhr, unabhängig von der Abholzeit des Fahrrads. Für die Berechnung der Miettage beginnt jeder Miettag um 10:00 Uhr und endet um 19:00 Uhr desselben Tages.",
        example: "Beispiel: Holt ein Kunde das Fahrrad an einem Mittwoch um 17:00 Uhr ab und mietet es für 7 Tage, so ist der letzte Nutzungstag der darauffolgende Dienstag. Die Rückgabe muss bis 19:00 Uhr dieses Dienstags erfolgen, oder ab 10:00 Uhr des darauffolgenden Mittwochs, wie zuvor mit dem Verleih vereinbart."
      },
      s2: {
        title: "2. Voraussetzungen für den Verleih von Elektrofahrrädern",
        body: "Für die Miete von Elektrofahrrädern (E-Bikes) müssen folgende Voraussetzungen erfüllt sein:",
        bullets: [
          "Vorlage eines gültigen Personalausweises oder Reisepasses im Original. Kopien und abgelaufene Dokumente werden nicht akzeptiert.",
          "Vorlage einer physischen Kreditkarte auf den Namen des Mieters. Virtuelle Geldbörsen, E-Geld-Konten und Prepaid-Karten werden nicht akzeptiert.",
          "Hinterlegung einer rückerstattbaren Kaution, deren Betrag zum Zeitpunkt der Reservierung mitgeteilt wird."
        ]
      },
      s3: {
        title: "3. Rückgabe und Verspätungsgebühren",
        body: "Das Fahrrad muss innerhalb des vereinbarten Zeitraums zurückgegeben werden. Eine Rückgabe außerhalb der festgelegten Zeiten (nach 19:00 Uhr) führt automatisch zur Berechnung eines zusätzlichen Miettages. Bei Nichtrückgabe oder Verlust haftet der Kunde für den Wiederbeschaffungswert des Fahrrads."
      },
      s4: {
        title: "4. Zustand des Fahrrads und Haftung",
        body: "Der Kunde erhält das Fahrrad in einwandfreiem Zustand und ist während der Mietdauer für dessen Pflege verantwortlich. Jegliche Beschädigung, ungewöhnliche Abnutzung oder der Verlust von Zubehör (Helm, Schloss usw.) wird dem Kunden in Rechnung gestellt. Der Zustand des Fahrrads wird bei der Abholung und bei der Rückgabe überprüft."
      },
      s5: {
        title: "5. Nutzung des Fahrrads",
        body: "Die gemieteten Fahrräder sind für den persönlichen und freizeitlichen Gebrauch des Kunden bestimmt. Ausdrücklich untersagt ist:",
        bullets: [
          "Die Untervermietung oder Überlassung des Fahrrads an Dritte.",
          "Die Nutzung bei Wettkämpfen, Sportveranstaltungen oder Hochrisiko-Aktivitäten.",
          "Jegliche Modifikationen am Fahrrad."
        ]
      },
      s6: {
        title: "6. Stornierungen",
        body: "Die Stornierungsbedingungen werden zum Zeitpunkt der Reservierung vereinbart. Gravitate Bikes behält sich das Recht vor, den Service unter außergewöhnlichen Umständen (widrige Witterungsbedingungen, höhere Gewalt usw.) zu stornieren oder zu ändern, wobei der Kunde so früh wie möglich informiert wird."
      },
      s7: {
        title: "7. Änderungen",
        body: "Gravitate Bikes behält sich das Recht vor, diese Bedingungen jederzeit zu aktualisieren. Die jeweils gültige Fassung ist stets auf dieser Seite verfügbar."
      },
      footer: "Gravitate Bikes · San Pedro Alcántara, Marbella"
    }
  }
};

