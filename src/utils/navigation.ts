export const docsNavigation = [
  {
    section: 'Getting Started',
    items: [
      { title: 'Introduction', slug: 'getting-started' },
      { title: 'Installation', slug: 'getting-started/installation' },
      { title: 'First Message', slug: 'getting-started/first-message' },
      { title: 'Configuration', slug: 'getting-started/configuration' },
    ],
  },
  {
    section: 'Architecture & Concepts',
    items: [
      { title: 'Overview', slug: 'architecture' },
      { title: 'Transport Abstraction', slug: 'architecture/transport-abstraction' },
      { title: 'Routing', slug: 'architecture/routing' },
      { title: 'Dependency Injection', slug: 'architecture/dependency-injection' },
    ],
  },
  {
    section: 'Messaging Patterns',
    items: [
      { title: 'Commands', slug: 'messaging/commands' },
      { title: 'Events', slug: 'messaging/events' },
      { title: 'Requests', slug: 'messaging/requests' },
      { title: 'Multicast Requests', slug: 'messaging/multicast-requests' },
    ],
  },
  {
    section: 'Transports',
    items: [
      { title: 'Transport Overview', slug: 'transports' },
      { title: 'Azure Service Bus', slug: 'transports/azure-service-bus' },
      { title: 'Redis', slug: 'transports/redis' },
      { title: 'AMQP', slug: 'transports/amqp' },
      { title: 'SQL Server', slug: 'transports/sql-server' },
      { title: 'PostgreSQL', slug: 'transports/postgres' },
      { title: 'In-Process', slug: 'transports/in-process' },
    ],
  },
  {
    section: 'Advanced Topics',
    items: [
      { title: 'Interceptors', slug: 'advanced/interceptors' },
      { title: 'Serialization', slug: 'advanced/serialization' },
      { title: 'Large Messages', slug: 'advanced/large-messages' },
      { title: 'Error Handling', slug: 'advanced/error-handling' },
    ],
  },
  {
    section: 'Guides',
    items: [
      { title: 'Autofac Integration', slug: 'guides/autofac-integration' },
      { title: 'Logging', slug: 'guides/logging' },
      { title: 'Testing', slug: 'guides/testing' },
      { title: 'Contributing', slug: 'guides/contributing' },
    ],
  },
  {
    section: 'Examples',
    items: [
      { title: 'Cafe Application', slug: 'examples/cafe-application' },
      { title: 'Common Patterns', slug: 'examples/common-patterns' },
    ],
  },
];
