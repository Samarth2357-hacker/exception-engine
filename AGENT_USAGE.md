# AI Agent Usage Documentation

In building this prototype, AI tools were utilized strictly for workflow acceleration and boilerplate generation, while core architectural decisions, business logic, and UI layout remained human-driven.

## Tools Utilized
- GitHub Copilot (Inline autocomplete)
- ChatGPT (GPT-4o) (Dummy data generation and Tailwind syntax reference)

## Delegated Work
- **Mock Data Generation:** I delegated the creation of the `initialExceptions` JSON array to AI to quickly generate realistic-looking WMS/OMS error states (e.g., SKU mismatches, invalid addresses) without typing them manually.
- **Icon Sourcing:** Asked the agent to suggest appropriate `lucide-react` icon names for specific warehouse actions (e.g., `PackageX` for inventory errors).

## Representative Prompts
- *"Generate a TypeScript array of 5 mock fulfillment exceptions. Include properties for orderId, issue (related to WMS/OMS errors), source platform, status ('open' or 'resolved'), age, and monetary value."*
- *"What is the standard Tailwind CSS class combination to create a sticky header with a subtle bottom border and backdrop blur?"*

## Important Agent Mistakes & Rejected Suggestions
- **Over-engineering State:** The AI initially suggested implementing a complex `useReducer` or integrating Redux/Zustand for managing the exception queue. **I explicitly rejected this.** For a lightweight, single-page UI prototype, standard React `useState` is much cleaner and avoids unnecessary dependency bloat.
- **Hallucinated Tailwind Classes:** The AI attempted to use non-standard Tailwind spacing variables (e.g., `gap-7.5`). I manually corrected these to adhere to the strict Tailwind design system (`gap-6` and `gap-8`) to prevent compilation errors.

## Output Verification
- Validated all generated code by running `npm run build` locally to ensure no strict TypeScript errors or ESLint warnings were introduced by AI output.
- Visually verified responsive breakpoints and state changes using React Developer Tools in the browser.