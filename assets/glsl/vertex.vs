varying vec2 vUv;
uniform sampler2D texture;
uniform float u_time;
varying vec3 newPosition;

void main(void) {
    vUv = uv;
	
	vec4 video = texture2D(texture,uv);
	
	// noise = snoise(vec4(position.x/20.0,position.y/20.0,position.z/20.0,time));
	float z = (video.x + video.y + video.z) / 3.;

    // uv += vec2(cos(u_time * uv.y * scale), cos(u_time + uv.x * scale));


	vec3 newPosition = position.xyz;
	newPosition.z += sin(vUv.y*10.0+u_time)*1.0;
	newPosition.x += sin(vUv.y*10.0+u_time)*1.0;
	newPosition.y += sin(vUv.y*10.0+u_time)*1.0;
	// newPosition.x += sin(vUv.y * 2.0);

	gl_PointSize = 1.0;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}

