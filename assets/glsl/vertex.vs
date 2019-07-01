varying vec2 vUv;
uniform sampler2D texture;
uniform float time;
varying vec3 newPosition;

void main(void) {
    vUv = uv;

	vec3 newPosition = position.xyz;

	// gl_PointSize = 1.0;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0 );


}

