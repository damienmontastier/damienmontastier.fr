varying vec2 vUv;
uniform sampler2D texture;
uniform sampler2D texturebis;
uniform float u_pourcent;
uniform vec2 u_resolution;
uniform float u_time;
varying vec3 newPosition;

precision mediump float;

void main(void) {
	vec2 uv = vUv;

    vec4 color = vec4(1.0, 1.0 , 1.0, 1.0);

    float scale = .5;

    // float distortion=newPosition.y+10.1;
    // uv += vec2(cos(u_time * uv.y * scale), cos(u_time + uv.x * scale));

    	uv.x -= sin(uv.y*10.0+u_time)/100.0;

	// uv.y += sin(u_time * 3.75);

    gl_FragColor = texture2D(texture, uv) * color; 
}

// gl_FragColor = vec4(1.0,0.0,1.0,1.0);