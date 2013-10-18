var Prestige = {
		
	name: 'Prestige',

	options: {},

	init: function(options) {
		this.options = $.extend(this.options, options);
	},
  
	saveStores: function(saveBool) {
		var prevStores = [ //g = goods, w = weapons, a = ammo
			Math.floor($SM.get('stores["wood"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["fur"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["meat"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["iron"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["coal"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["sulphur"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["steel"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["cured meat"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["scales"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["teeth"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["leather"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["bait"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["torch"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["cloth"]') / Prestige.randGen(saveBool, 'g')),
			Math.floor($SM.get('stores["bone spear"]') / Prestige.randGen(saveBool, 'w')),
			Math.floor($SM.get('stores["iron sword"]') / Prestige.randGen(saveBool, 'w')),
			Math.floor($SM.get('stores["steel sword"]') / Prestige.randGen(saveBool, 'w')),
			Math.floor($SM.get('stores["bayonet"]') / Prestige.randGen(saveBool, 'w')),
			Math.floor($SM.get('stores["rifle"]') / Prestige.randGen(saveBool, 'w')),
			Math.floor($SM.get('stores["laser rifle"]') / Prestige.randGen(saveBool, 'w')),
			Math.floor($SM.get('stores["bullets"]') / Prestige.randGen(saveBool, 'a')),
			Math.floor($SM.get('stores["energy cell"]') / Prestige.randGen(saveBool, 'a')),
			Math.floor($SM.get('stores["grenade"]') / Prestige.randGen(saveBool, 'a')),
			Math.floor($SM.get('stores["bolas"]') / Prestige.randGen(saveBool, 'a'))
		];
		for (var n = 0; n <= 23; n++) {
			if (isNaN(prevStores[n])) {
				prevStores[n] = 0;
			}
		}
		if(saveBool) {
			$SM.set('previous.stores', prevStores);
		}
    return prevStores;
	},
  
  saveScore: function() {
    var prevScore = Score.totalScore();
    $SM.set('previous.score',prevScore);
    return prevScore;
  },

	populateNewSave : function(newstate) {
		State = {
			previous : {
				stores : newstate["stores"],
        score : newstate["score"]
			}
      
		};
		Engine.init({
			state : State
		});
	},
  
	load : function() {
		var prevStores = $SM.get('previous.stores');
		if(prevStores != null) {
			$SM.add('stores["wood"]', prevStores[0]);
			$SM.add('stores["fur"]', prevStores[1]);
			$SM.add('stores["meat"]', prevStores[2]);
			$SM.add('stores["iron"]', prevStores[3]);
			$SM.add('stores["coal"]', prevStores[4]);
			$SM.add('stores["sulphur"]', prevStores[5]);
			$SM.add('stores["steel"]', prevStores[6]);
			$SM.add('stores["cured meat"]', prevStores[7]);
			$SM.add('stores["scales"]', prevStores[8]);
			$SM.add('stores["teeth"]', prevStores[9]);
			$SM.add('stores["leather"]', prevStores[10]);
			$SM.add('stores["bait"]', prevStores[11]);
			$SM.add('stores["torch"]', prevStores[12]);
			$SM.add('stores["cloth"]', prevStores[13]);
			$SM.add('stores["bone spear"]', prevStores[14]);
			$SM.add('stores["iron sword"]', prevStores[15]);
			$SM.add('stores["steel sword"]', prevStores[16]);
			$SM.add('stores["bayonet"]', prevStores[17]);
			$SM.add('stores["rifle"]', prevStores[18]);
			$SM.add('stores["laser rifle"]', prevStores[19]);
			$SM.add('stores["bullets"]', prevStores[20]);
			$SM.add('stores["energy cell"]', prevStores[21]);
			$SM.add('stores["grenade"]', prevStores[22]);
			$SM.add('stores["bolas"]', prevStores[23]);
		}
		return prevStores;
	},

	randGen : function(saveBool, storeType) {
		if (saveBool) {
			if (storeType == 'g') {
				divisor = Math.floor(Math.random() * 10);
			} else if (storeType == 'w') {
				divisor = Math.floor(Math.floor(Math.random() * 10) / 2);
			} else if (storeType == 'a') {
				divisor = Math.ceil(Math.random() * 10
						* Math.ceil(Math.random() * 10));
			} else {
				divisor = 1;
			}
			if (divisor === 0) {
				divisor = 1;
			}
			return divisor;
		} 
		else {
			return 1;
		};
	}

};
