var objectStream = function(bufferSize, cursor, scene, endtime) {
	
	this.cursor = cursor
	var thisScene = scene;
	var buffSize = bufferSize;
	
	//this.sphereColor = color;
	var endTime = endtime;
	this.objectArray = [];

	this.objStream = new THREE.Object3D();

	var material = new THREE.MeshPhongMaterial( { color: 0xff0010 } );
	var isoGeometry = new THREE.IcosahedronGeometry(5, 0);

	this.objStream.position = new THREE.Vector3 (0,0,0);

	for ( var i = 0; i < buffSize; i++) {

		
		var object = new THREE.Mesh(isoGeometry, material);
		object.position.x = this.objStream.position.x
		object.position.y = this.objStream.position.y
		object.position.z = camera.far/buffSize;
		this.objectArray.push(object);
		thisScene.add(object);
		pickups.push(object);	
	}

	this.objStream.position.z = (camera.position.z - camera.far);

	this.update = function () {


		for( var i = 0; i < buffSize; i++) {

			if (this.objectArray[i].position.z > camera.position.z) {

				this.objectArray[i].position.x = this.objStream.position.x;
				this.objectArray[i].position.y = this.objStream.position.y;
				this.objectArray[i].position.z = this.objStream.position.z - (camera.far/buffSize)*i;

			}
			
		}

	}

}