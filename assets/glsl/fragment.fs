varying vec2 vUv;
uniform sampler2D texture;
uniform float u_pourcent;
uniform vec2 u_resolution;
uniform float u_time;

precision mediump float;

void main(void) {
// Get the UV Coordinate of your texture or Screen Texture, yo!
	vec2 uv = vUv;

    vec4 coloreee = vec4(1.0, 1.0 , 1.0, u_pourcent);
	
    gl_FragColor = texture2D(texture, uv) * coloreee; 

    // gl_FragColor = vec4(1.0,0.0,1.0,1.0);
}