// theatreStudioSetup.js
import studio from '@theatre/studio';
import { getProject } from '@theatre/core';
import theatreState from './theatreState.json';

studio.initialize();

// Initialize Theatre.js project and sheet
const project = getProject('3D Project', { state: theatreState });
const sheet = project.sheet('Animations');

// Export the project to be used elsewhere
export { project, sheet };
