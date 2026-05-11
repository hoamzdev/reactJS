import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Calculated Weather',
      description: 'Built Figma and Webflow to help launch websites faster Pretested to production in it.',
      icon: '☂️'
    },
    {
      id: 2,
      title: 'Best Flights',
      description: 'Flexibility to book fast and easy Planned for my future engagements Hail guide but they wish build for us.',
      icon: '✈️'
    },
    {
      id: 3,
      title: 'Local Events',
      description: 'Join from an app, launch your site quickly. Connect with thousands of hosts to grow your hosting.',
      icon: '🎤'
    },
    {
      id: 4,
      title: 'Customization',
      description: 'We deliver custom services for military customers where no matter what they can use the resources to create.',
      icon: '⚙️'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <span className="services-label">CATEGORY</span>
        <h2 className="services-heading">We Offer Best Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
