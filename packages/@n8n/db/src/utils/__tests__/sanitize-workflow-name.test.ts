import { sanitizeWorkflowName } from '../sanitize-workflow-name';

describe('sanitizeWorkflowName', () => {
	test('removes script tags from name', () => {
		const sanitized = sanitizeWorkflowName('<script>alert("xss")</script>MyWorkflow');
		expect(sanitized).toBe('MyWorkflow');
	});

	test('removes inline event handlers from name', () => {
		const sanitized = sanitizeWorkflowName('<img src=x onerror=alert(1)>MyWorkflow');
		expect(sanitized).toBe('MyWorkflow');
	});
});
