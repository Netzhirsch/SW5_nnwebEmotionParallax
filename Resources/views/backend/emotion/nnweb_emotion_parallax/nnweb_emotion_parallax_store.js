//{block name="backend/Emotion/app" append}
Ext.define('Shopware.apps.nnwebEmotionParallax.store.BackgroundPositionStore', {
	extend : 'Ext.data.Store',
	fields : [ {
		name : 'id',
		type : 'integer'
	}, {
		name : 'name',
		type : 'string'
	},
	{
		name : 'value',
		type : 'string'
	}],
	data : [ {
		id : 1,
		name : "Links",
		value : "nnwebEmotionParallax_hintergrund_position_links"		
	}, {
		id : 2,
		name : "Mitte",
		value : "nnwebEmotionParallax_hintergrund_position_mitte"
	}, {
		id : 3,
		name : "Rechts",
		value : "nnwebEmotionParallax_hintergrund_position_rechts"
	}]
});

Ext.define('Shopware.apps.nnwebEmotionParallax.store.HeadlineTagStore', {
	extend : 'Ext.data.Store',
	fields : [ {
		name : 'id',
		type : 'integer'
	}, {
		name : 'name',
		type : 'string'
	},
	{
		name : 'value',
		type : 'string'
	}],
	data : [ {
		id : 1,
		name : "H1",
		value : "h1"		
	}, {
		id : 2,
		name : "H2",
		value : "h2"
	}, {
		id : 3,
		name : "H3",
		value : "h3"
	}, {
		id : 4,
		name : "H3",
		value : "h3"
	}, {
		id : 5,
		name : "H4",
		value : "h4"
	}, {
		id : 6,
		name : "H5",
		value : "h5"
	}, {
		id : 7,
		name : "H6",
		value : "h6"
	}]
});

Ext.define('Shopware.apps.nnwebEmotionParallax.store.TextAlignStore', {
	extend : 'Ext.data.Store',
	fields : [ {
		name : 'id',
		type : 'integer'
	}, {
		name : 'name',
		type : 'string'
	},
	{
		name : 'value',
		type : 'string'
	}],
	data : [ {
		id : 1,
		name : "Links",
		value : "left"		
	}, {
		id : 2,
		name : "Mitte",
		value : "center"
	}, {
		id : 3,
		name : "Rechts",
		value : "right"
	}, {
		id : 4,
		name : "Blocksatz",
		value : "justify"
	}]
});

Ext.define('Shopware.apps.nnwebEmotionParallax.store.LinkTargetStore', {
	extend : 'Ext.data.Store',
	fields : [ {
		name : 'id',
		type : 'integer'
	}, {
		name : 'name',
		type : 'string'
	},
	{
		name : 'value',
		type : 'string'
	}],
	data : [ {
		id : 1,
		name : "Selbes Fenster",
		value : "_self"		
	}, {
		id : 2,
		name : "Neues Fenster",
		value : "_blank"
	}]
});

Ext.define('Shopware.apps.nnwebEmotionParallax.store.BoxAlignXStore', {
	extend : 'Ext.data.Store',
	fields : [ {
		name : 'id',
		type : 'integer'
	}, {
		name : 'name',
		type : 'string'
	},
	{
		name : 'value',
		type : 'string'
	}],
	data : [ {
		id : 1,
		name : "Links",
		value : "box-left"		
	}, {
		id : 2,
		name : "Mitte",
		value : "box-center-x"
	}, {
		id : 3,
		name : "Rechts",
		value : "box-right"
	},]
});

Ext.define('Shopware.apps.nnwebEmotionParallax.store.BoxAlignYStore', {
	extend : 'Ext.data.Store',
	fields : [ {
		name : 'id',
		type : 'integer'
	}, {
		name : 'name',
		type : 'string'
	},
	{
		name : 'value',
		type : 'string'
	}],
	data : [ {
		id : 1,
		name : "Oben",
		value : "box-top"		
	}, {
		id : 2,
		name : "Mitte",
		value : "box-center-y"
	}, {
		id : 3,
		name : "Unten",
		value : "box-bottom"
	},]
});
// {/block}
