'use strict';

function isSpecialParameter(char) {
	return char.match(/^[\d\-!@#?*$]$/);
}

module.exports = function expansionStart(state, source, reducers) {
	const char = source && source.shift();

	if (char === '{') {
		return {
			nextReduction: reducers.expansionParameterExtended,
			nextState: state.appendChar(char)
		};
	}

	if (char === '(') {
		return {
			nextReduction: reducers.expansionCommandOrArithmetic,
			nextState: state.appendChar(char)
		};
	}

	if (/[a-zA-Z_]/.test(char)) {
		return {
			nextReduction: reducers.expansionParameter,
			nextState: state.appendChar(char).replaceLastExpansion({
				parameter: char,
				type: 'parameter_expansion'
			})
		};
	}

	if (isSpecialParameter(char)) {
		return reducers.expansionSpecialParameter(state, [char].concat(source), reducers);
	}

	// $ not followed by a valid expansion character — treat as literal.
	const cleanState = state.removeLastExpansion();
	return cleanState.previousReducer(cleanState, [char].concat(source), reducers);
};
