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
        title1: "Descubre el paseo",
        title2: "en bicicleta",
        btnRent: "Ver tarifas de alquiler",
        btnRepair: "Reparaciones",
      },
      services: {
        title: "¿Qué ofrecemos?",
        subtitle: "Todo lo que necesitas para disfrutar de la bici en el paseo marítimo de San Pedro Alcántara.",
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
        ages: { title: "Para todos los públicos", desc: "Bicis adaptadas a adultos, jóvenes y familias. Tenemos la bici que buscas." },
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
        warning: "Para alquilar bicicletas eléctricas es necesario presentar DNI/Pasaporte original y tarjeta de crédito física.",
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
      btnWa: "Reservar por WhatsApp"
    },
    reparaciones: {
      header: { title: "Reparaciones", subtitle: "Taller especializado en todo tipo de bicicletas. Reparaciones rápidas y al mejor precio en San Pedro Alcántara." },
      workshop: { title: "Servicio rápido y profesional", desc: "En nuestro taller trabajamos con todo tipo de bicicletas: de paseo, montaña, carretera y eléctricas. Diagnosis rápida y presupuesto sin compromiso.", points: ["Reparaciones en el día para la mayoría de averías", "Presupuesto gratuito antes de cualquier trabajo", "Piezas de repuesto de calidad", "Técnicos con experiencia en bicis eléctricas"] },
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
      bio: { title: "28 años de pasión por el ciclismo", desc1: "Nuestro fundador, Gabriel Sarria, lleva toda una vida dedicado al mundo de la bicicleta. Empezó como competidor, llegando a ser campeón de España de descenso, y ha ganado la Copa de Descenso tanto en España como en Portugal. Además, fue el referente en Andalucía de esta disciplina durante 10 años consecutivos.", desc2: "Tras su exitosa etapa competitiva, Gabriel ha viajado por varios países adquiriendo experiencia y los más altos estándares de reparación. Es monitor de ciclismo titulado por la FAC, combinando su conocimiento técnico con la pasión por enseñar y compartir la cultura ciclista." },
      values: { title: "Nuestros Valores", subtitle: "Lo que nos mueve cada día", q1: { title: "Calidad profesional", desc: "Aplicamos los estándares de la alta competición a cada bicicleta que entra en nuestro taller." }, q2: { title: "Trato cercano", desc: "Somos una familia ciclista. Queremos que te sientas como en casa cada vez que nos visitas." }, q3: { title: "Pasión", desc: "No es solo nuestro trabajo, es nuestra forma de vida. Amamos cada aspecto del ciclismo." } },
      workshop: { title: "Nuestro taller", desc: "Nuestro espacio de trabajo está equipado con las mejores herramientas para garantizar una reparación precisa y de calidad. Nos aseguramos de que cada bicicleta salga en perfectas condiciones.", btnWa: "Contactar por WhatsApp", findUs: "Encuéntranos en el paseo marítimo", location: "San Pedro Alcántara, Marbella" },
      stats: { y28: "Años de experiencia", ref: "Años de referente en Andalucía", cup: "Copa de Descenso (ESP y PT)", fac: "Monitor de Ciclismo Oficial" }
    },
    contacto: {
      header: { title: "¿Dónde estamos?", subtitle: "Encuéntranos en el paseo marítimo de San Pedro Alcántara. Pásate por el local o contáctanos por cualquiera de estos medios." },
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
      header: { title: "Bicis Woom", subtitle: "Las mejores bicicletas ultraligeras para niños, ahora disponibles para alquiler.", cta: "Consultar disponibilidad" },
      why: "¿Por qué woom?",
      range: "Gama woom",
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
    footer: "© 2026 Gravitate Bikes · Av. Lopez de Mena nº 14, San Pedro Alcántara · Todos los derechos reservados"
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
        title1: "Discover the promenade",
        title2: "by bicycle",
        btnRent: "View rental rates",
        btnRepair: "Repairs",
      },
      services: {
        title: "What do we offer?",
        subtitle: "Everything you need to enjoy cycling on the San Pedro Alcántara promenade.",
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
        ages: { title: "For all ages", desc: "Bikes adapted for adults, youth, and families. We have the bike you are looking for." },
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
        warning: "To rent electric bicycles, an original ID/Passport and a physical credit card are required.",
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
      btnWa: "Book via WhatsApp"
    },
    reparaciones: {
      header: { title: "Repairs", subtitle: "Specialized workshop for all types of bicycles. Fast repairs at the best price in San Pedro Alcántara." },
      workshop: { title: "Fast and professional service", desc: "In our workshop, we work with all types of bicycles: city, mountain, road, and e-bikes. Quick diagnosis and free quotes.", points: ["Same-day repairs for most issues", "Free quote before any work", "Quality replacement parts", "Technicians with e-bike experience"] },
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
      bio: { title: "28 years of passion for cycling", desc1: "Our founder, Gabriel Sarria, has dedicated his whole life to the world of bicycles. He started as a competitor, becoming the Spanish downhill champion, and has won the Downhill Cup in both Spain and Portugal. Furthermore, he was the benchmark in Andalusia for this discipline for 10 consecutive years.", desc2: "After his successful competitive stage, Gabriel has traveled through several countries acquiring experience and the highest repair standards. He is a certified cycling instructor by the FAC, combining his technical knowledge with the passion to teach and share cycling culture." },
      values: { title: "Our Values", subtitle: "What moves us every day", q1: { title: "Professional quality", desc: "We apply the standards of high competition to every bicycle that enters our workshop." }, q2: { title: "Friendly service", desc: "We are a cycling family. We want you to feel at home every time you visit us." }, q3: { title: "Passion", desc: "It's not just our job, it's our way of life. We love every aspect of cycling." } },
      workshop: { title: "Our workshop", desc: "Our workspace is equipped with the best tools to ensure precise and high-quality repairs. We make sure every bicycle leaves in perfect condition.", btnWa: "Contact via WhatsApp", findUs: "Find us on the promenade", location: "San Pedro Alcántara, Marbella" },
      stats: { y28: "Years of experience", ref: "Years as a reference in Andalusia", cup: "Downhill Cup (ESP & PT)", fac: "Official Cycling Instructor" }
    },
    contacto: {
      header: { title: "Where are we?", subtitle: "Find us on the San Pedro Alcántara promenade. Drop by the shop or contact us through any of these means." },
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
      header: { title: "Woom Bikes", subtitle: "The best ultralight bicycles for children, now available for rent.", cta: "Check availability" },
      why: "Why woom?",
      range: "woom range",
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
    footer: "© 2026 Gravitate Bikes · Av. Lopez de Mena 14, San Pedro Alcántara · All rights reserved"
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
        title1: "Découvrez la promenade",
        title2: "à vélo",
        btnRent: "Voir les tarifs de location",
        btnRepair: "Réparations",
      },
      services: {
        title: "Que proposons-nous ?",
        subtitle: "Tout ce dont vous avez besoin pour profiter du vélo sur la promenade de San Pedro Alcántara.",
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
        ages: { title: "Pour tous les âges", desc: "Des vélos adaptés aux adultes, aux jeunes et aux familles. Nous avons le vélo que vous cherchez." },
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
        warning: "Pour louer des vélos électriques, une pièce d'identité/passeport original et une carte de crédit physique sont requis.",
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
      btnWa: "Réserver via WhatsApp"
    },
    reparaciones: {
      header: { title: "Réparations", subtitle: "Atelier spécialisé pour tous types de vélos. Réparations rapides au meilleur prix à San Pedro Alcántara." },
      workshop: { title: "Service rapide et professionnel", desc: "Dans notre atelier, nous travaillons avec tous types de vélos : ville, montagne, route et e-bikes. Diagnostic rapide et devis gratuits.", points: ["Réparations le jour même pour la plupart des pannes", "Devis gratuit avant toute intervention", "Pièces de rechange de qualité", "Techniciens avec expérience en e-bikes"] },
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
      bio: { title: "28 ans de passion pour le cyclisme", desc1: "Notre fondateur, Gabriel Sarria, a consacré toute sa vie au monde du vélo. Il a commencé comme compétiteur, devenant champion d'Espagne de descente, et a remporté la Coupe de Descente en Espagne et au Portugal. De plus, il a été la référence en Andalousie pour cette discipline pendant 10 années consécutives.", desc2: "Après sa carrière compétitive réussie, Gabriel a voyagé dans plusieurs pays en acquérant de l'expérience et les normes de réparation les plus élevées. Il est moniteur de cyclisme certifié par la FAC, combinant ses connaissances techniques avec la passion d'enseigner et de partager la culture cycliste." },
      values: { title: "Nos Valeurs", subtitle: "Ce qui nous motive chaque jour", q1: { title: "Qualité professionnelle", desc: "Nous appliquons les standards de la haute compétition à chaque vélo qui entre dans notre atelier." }, q2: { title: "Service convivial", desc: "Nous sommes une famille cycliste. Nous voulons que vous vous sentiez chez vous à chaque visite." }, q3: { title: "Passion", desc: "Ce n'est pas seulement notre travail, c'est notre mode de vie. Nous aimons chaque aspect du cyclisme." } },
      workshop: { title: "Notre atelier", desc: "Notre espace de travail est équipé des meilleurs outils pour garantir une réparation précise et de qualité. Nous veillons à ce que chaque vélo parte en parfait état.", btnWa: "Contacter par WhatsApp", findUs: "Retrouvez-nous sur la promenade", location: "San Pedro Alcántara, Marbella" },
      stats: { y28: "Années d'expérience", ref: "Années de référence en Andalousie", cup: "Coupe de Descente (ESP & PT)", fac: "Moniteur de Cyclisme Officiel" }
    },
    contacto: {
      header: { title: "Où sommes-nous ?", subtitle: "Retrouvez-nous sur la promenade de San Pedro Alcántara. Passez à la boutique ou contactez-nous par l'un de ces moyens." },
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
      header: { title: "Vélos Woom", subtitle: "Les meilleurs vélos ultra-légers pour enfants, maintenant disponibles à la location.", cta: "Vérifier la disponibilité" },
      why: "Pourquoi woom ?",
      range: "Gamme woom",
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
    footer: "© 2026 Gravitate Bikes · Av. Lopez de Mena 14, San Pedro Alcántara · Tous droits réservés"
  }
};
