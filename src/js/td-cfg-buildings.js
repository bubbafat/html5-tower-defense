/*
 * Copyright (c) 2011.
 *
 * Author: oldj <oldj.wu@gmail.com>
 * Blog: http://oldj.net/
 *
 * 本文件定义了建筑的参数、属性
 */

// _TD.a.push begin
_TD.a.push(function (TD) {

	/**
	 * 默认的升级规则
	 * @param old_level {Number}
	 * @param old_value {Number}
	 * @return new_value {Number}
	 */
	TD.default_upgrade_rule = function (old_level, old_value) {
		return old_value * 1.2;
	};

	/**
	 * 取得建筑的默认属性
	 * @param building_type {String} 建筑类型
	 */
	TD.getDefaultBuildingAttributes = function (building_type) {

		var building_attributes = {
			// 路障
			"wall": {
				typeid: 1,
				damage: 0,
				range: 0,
				speed: 0,
				bullet_speed: 0,
				life: 100,
				shield: 500,
				cost: 5
			},

			// 炮台
			"cannon": {
				typeid: 2,
				damage: 12,
				range: 4,
				max_range: 8,
				speed: 2,
				bullet_speed: 6,
				life: 100,
				shield: 100,
				cost: 300,
				_upgrade_rule_damage: function (old_level, old_value) {
					return old_value * (old_level <= 10 ? 1.2 : 1.3);
				}
			},

			// 轻机枪
			"LMG": {
				typeid: 3,
				damage: 5,
				range: 5,
				max_range: 10,
				speed: 3,
				bullet_speed: 6,
				life: 100,
				shield: 50,
				cost: 100
			},

			// 重机枪
			"HMG": {
				typeid: 4,
				damage: 30,
				range: 3,
				max_range: 5,
				speed: 3,
				bullet_speed: 5,
				life: 100,
				shield: 200,
				cost: 800,
				_upgrade_rule_damage: function (old_level, old_value) {
					return old_value * 1.3;
				}
			},

			// 激光枪
			"laser_gun": {
				typeid: 5,
				damage: 25,
				range: 6,
				max_range: 10,
				speed: 20,
//				bullet_speed: 10, // laser_gun 的 bullet_speed 属性没有用
				life: 100,
				shield: 100,
				cost: 2000
			},
			
			"quicksand": {
				typeid: 6,
				damage: 200,
				range: 1,
				max_range: 1,
				speed: 1,
				life: 100,
				shield: 100,
				cost: 5000,
				_upgrade_rule_damage: function(old_level, old_value) {
					return old_value * 1.25;
				}
			},
			
			"missile": {
				typeid: 7,
				damage: 50,
				range: 4,
				max_range: 10,
				speed: 1,
				bullet_speed: 3,
				life: 100,
				shield: 100,
				cost: 10000,
				_upgrade_rule_damage: function(old_level, old_value) {
					return old_value * 1.3;
				}
			}
		};

		return building_attributes[building_type] || {};
	};

}); // _TD.a.push end
