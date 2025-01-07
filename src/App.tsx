import React, { useState } from 'react';
import { 
  Droplet, 
  Lightbulb, 
  Settings, 
  BarChart, 
  Shield, 
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  ArrowLeft
} from 'lucide-react';

// Service details with images
const serviceDetails = [
  {
    id: 'feasibility',
    icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    title: "Études de faisabilité et exploration",
    description: "Analyses approfondies pour évaluer la viabilité des projets pétroliers",
    fullDescription: "Notre équipe d'experts réalise des études de faisabilité complètes pour vos projets d'exploration pétrolière. Nous utilisons des technologies de pointe et des méthodologies éprouvées pour évaluer le potentiel des gisements et optimiser vos investissements.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    benefits: [
      "Évaluation précise des ressources",
      "Analyse des risques détaillée",
      "Recommandations stratégiques",
      "Optimisation des coûts"
    ]
  },
  {
    id: 'engineering',
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: "Consulting en ingénierie",
    description: "Expertise technique pour optimiser vos opérations d'exploitation",
    fullDescription: "Notre service de consulting en ingénierie vous accompagne dans l'optimisation de vos processus d'exploitation. Nos consultants expérimentés vous apportent des solutions innovantes et adaptées à vos besoins spécifiques.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    benefits: [
      "Optimisation des processus",
      "Solutions sur mesure",
      "Support technique continu",
      "Innovation technologique"
    ]
  },
  {
    id: 'audit',
    icon: <BarChart className="w-12 h-12 text-blue-600" />,
    title: "Audit des infrastructures",
    description: "Évaluation complète de vos installations pétrolières",
    fullDescription: "Nos audits d'infrastructures garantissent la conformité et la performance de vos installations. Nous identifions les points d'amélioration et proposons des solutions concrètes pour optimiser vos opérations.",
    image: "https://images.unsplash.com/photo-1574679624586-0d57f3621a3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    benefits: [
      "Évaluation complète des installations",
      "Identification des risques",
      "Plan d'amélioration détaillé",
      "Suivi des recommandations"
    ]
  },
  {
    id: 'hse',
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Conformité HSE",
    description: "Accompagnement en matière d'hygiène, sécurité et environnement",
    fullDescription: "La sécurité et le respect de l'environnement sont au cœur de nos préoccupations. Nous vous accompagnons dans la mise en conformité de vos installations avec les normes HSE les plus strictes.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    benefits: [
      "Conformité réglementaire",
      "Prévention des risques",
      "Formation du personnel",
      "Gestion environnementale"
    ]
  },
  {
    id: 'training',
    icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    title: "Formation technique",
    description: "Programmes de formation adaptés pour vos équipes",
    fullDescription: "Nos programmes de formation technique permettent à vos équipes de maintenir leurs compétences à jour et d'acquérir de nouvelles expertises essentielles dans un secteur en constante évolution.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    benefits: [
      "Formation sur mesure",
      "Expertise pratique",
      "Certification professionnelle",
      "Suivi personnalisé"
    ]
  },
  {
    id: 'optimization',
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: "Optimisation des opérations",
    description: "Amélioration de l'efficacité et réduction des coûts",
    fullDescription: "Notre expertise en optimisation des opérations vous permet d'améliorer l'efficacité de vos processus tout en réduisant vos coûts d'exploitation. Nous identifions les opportunités d'amélioration et mettons en place des solutions concrètes.",
    image: "https://images.unsplash.com/photo-1581094283764-b5d84ab723d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    benefits: [
      "Réduction des coûts",
      "Amélioration de la productivité",
      "Optimisation des ressources",
      "Solutions innovantes"
    ]
  }
];

function ServicePage({ service, onBack }: { service: typeof serviceDetails[0], onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour aux services
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              {service.icon}
              <h1 className="text-3xl font-bold ml-4">{service.title}</h1>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              {service.fullDescription}
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Avantages clés</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedService, setSelectedService] = useState<typeof serviceDetails[0] | null>(null);

  if (selectedService) {
    return <ServicePage service={selectedService} onBack={() => setSelectedService(null)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Droplet className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">Energia Solutions</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#about" className="hover:text-blue-400">À propos</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              L'Excellence dans l'Expertise Pétrolière
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Solutions innovantes et expertise technique pointue pour l'industrie pétrolière
            </p>
            <a 
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(service)}
                className="text-left bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Expertise</h2>
              <p className="text-gray-600 mb-4">
                Depuis notre création, Energia Solutions s'engage à fournir des solutions 
                innovantes et une expertise technique pointue aux entreprises pétrolières.
              </p>
              <p className="text-gray-600 mb-4">
                Notre équipe d'experts combine des années d'expérience dans l'industrie 
                pétrolière avec une connaissance approfondie des dernières technologies.
              </p>
              <ul className="space-y-2">
                {[
                  "Plus de 15 ans d'expérience",
                  "Équipe d'experts internationaux",
                  "Solutions sur mesure",
                  "Engagement qualité"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1574679624586-0d57f3621a3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Équipe d'experts"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Contactez-nous</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Nos Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+1 (438) 356-7757</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>contact@energia-solutions.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>2184 Rue de Maricourt, Montreal CANADA</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Droplet className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold text-white">Energia Solutions</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Energia Solutions. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
