//
//{block name="backend/emotion/view/detail/elements/base"}
//{$smarty.block.parent}
Ext.define('Shopware.apps.Emotion.view.detail.elements.nnwebEmotionParallax', {

    extend: 'Shopware.apps.Emotion.view.detail.elements.Base',

    alias: 'widget.detail-element-emotion-components-nnweb-emotion-parallax',

    componentCls: 'emotion--nnweb-emotion-parallax',

    icon: ' data:image/png;base64,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',

    createPreview: function() {
        var me = this,
            preview = '',
            image = me.getConfigValue('nnwebEmotionParallax_hintergrundbild'),
            position = 'center center',
            style;

        console.log(image);
        if (Ext.isDefined(image)) {
            style = Ext.String.format('background-image: url([0]); background-position: [1];', image, position);

            preview = Ext.String.format('<div class="x-emotion-banner-element-preview" style="[0]"></div>', style);
        }

        return preview;
    }
});
//{/block}