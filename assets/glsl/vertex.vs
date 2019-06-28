    varying vec2 vUv;
    uniform sampler2D texture;
    uniform float time;

void main(void) {
    vUv = uv;
	
	vec4 video = texture2D(texture,uv);
	
	float z = (video.x + video.y + video.z) / 0.9;

	vec3 newPosition = position.xyz;
	newPosition.x += (z * 1.);
	newPosition.z = (z * 0.5);

	gl_PointSize = 1.0;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}