# Model Context Protocol TypeScript SDK

This SDK provides a TypeScript implementation of the Model Context Protocol, allowing easy integration with MCP-compatible services.

## Installation

```bash
npm install mcp-typescript-sdk
```

## Usage

```typescript
import { ModelContextClient } from 'mcp-typescript-sdk';

const client = new ModelContextClient({
  baseUrl: 'your-api-url',
  apiKey: 'your-api-key'
});

// Create a new context
const response = await client.createContext({
  name: 'My Context',
  parameters: {
    // your parameters
  }
});
```

## Documentation

For more detailed documentation, please refer to the source code and comments.

## License

MIT
