Read the file at `$ARGUMENTS` and generate a Jest unit test file for it.

Follow these rules:

- Place the test file next to the source file with the same name but a `.test.ts` or `.test.tsx` extension (match the source extension)
- Use `@testing-library/react` and `@testing-library/jest-dom` for React components; use plain Jest for non-component files
- Mirror the existing test style in this project: `describe` blocks per export/component, individual `it` blocks for each behavior
- Import from the source file using the same relative or alias path pattern already used in the codebase
- Only test observable behavior: rendered output, returned values, thrown errors — not implementation details
- For React components, use `render` + `screen` queries; prefer `getByRole`, `getByText`, `getByLabelText` over `getByTestId`
- Do not mock things unless strictly necessary (e.g., network calls or timers); prefer real data from `@/lib/data` where applicable
- After writing the file, run `npx jest --testPathPatterns=<test-file-name> --passWithNoTests` and fix any failures before finishing
