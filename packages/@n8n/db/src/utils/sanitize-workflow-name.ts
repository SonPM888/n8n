import xss from 'xss';

export const sanitizeWorkflowName = (name: string): string =>
	xss(name, {
		whiteList: {},
		stripIgnoreTag: true,
		stripIgnoreTagBody: ['script'],
	});
