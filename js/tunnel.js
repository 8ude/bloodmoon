function Tunnel (offset, end, audioController) {
	
	var offset = offset 
	var numObjects, tunnelRadius;
	var endTime = end;
	var audio = audioController;
	var speed = 10;


	var objectGeo;

	//init

	var tunnelRadius = 400;
	var objectGeo = new THREE.PlaneGeometry(400, 100);
	var objectMat = new THREE.MeshPhongMaterial( { color: 0xffff00, side: THREE.DoubleSide} );

	var center = new THREE.Vector3 (0,0,0);


	this.group = new THREE.Object3D();
	numObjects = 4 + Math.floor(Math.random() * 4);

	for (var i = 0; i < numObjects; i++) {
		var box = new THREE.Mesh(objectGeo, objectMat);
		box.position.x = tunnelRadius*Math.cos(2*i*Math.PI/numObjects); 
		box.position.y = tunnelRadius*Math.sin(2*i*Math.PI/numObjects);
		box.position.z = 0;

		box.lookAt(center);

		this.group.add(box);
	} 

	this.group.position.z = camera.position.z - (camera.far + offset);



	this.update = function () {


		//cant get color to fucking update fuck why the fuck am i so fucking terrible at this
		//var thisColor = new THREE.Color(0xffffff);

		if (time < endTime) {
			for( var i = 0; i < numObjects; i++) {
				//thisColor.setHSL(0.6611, audio.analyzer.array[5]/128, audio.analyzer.array[5]/128);
				//this.group.children[i].material.color.setHSL( thisColor);
				
			}
		}

		if (this.group.position.z > (camera.position.z + offset)) {
			this.group.position.z = camera.position.z - (camera.far+offset);
		}

		this.group.position.z += delta*speed;
		this.group.rotation.z += time/100000;

	}
}