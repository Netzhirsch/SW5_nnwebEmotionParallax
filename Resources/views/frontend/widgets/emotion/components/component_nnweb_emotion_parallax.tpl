{block name="widgets_emotion_components_nnweb_emotion_parallax"}
	{if $Data.nnwebEmotionParallax_button_link_produkt_id}
		{$link = {url controller="detail" sArticle=$Data.nnwebEmotionParallax_button_link_produkt_id}}
	{else}
		{$link = $Data.nnwebEmotionParallax_button_link}
	{/if}
	{$uniqid = uniqid()}
	{if !empty($Data.nnwebEmotionParallax_hintergrundbild_mobil)}
		{$backgroundImageMediaQuery = '@media (max-width:767px){#parallax-'}
		{$backgroundImageMediaQuery = $backgroundImageMediaQuery|cat:$uniqid}
		{$backgroundImageMediaQuery = $backgroundImageMediaQuery|cat:'{background-image:url(\''}
		{$backgroundImageMediaQuery = $backgroundImageMediaQuery|cat:{$Data.nnwebEmotionParallax_hintergrundbild_mobil}}
		{$backgroundImageMediaQuery = $backgroundImageMediaQuery|cat:"')}"}
	{/if}
	<style>
		#parallax-{$uniqid}{
			background-image:url('{$Data.nnwebEmotionParallax_hintergrundbild}')
		}
		{if !empty($Data.nnwebEmotionParallax_hintergrundbild_mobil)}
			{$backgroundImageMediaQuery}
		{/if}

	</style>
	<div id="parallax-{$uniqid}" class="nnweb_emotion_parallax {$Data.nnwebEmotionParallax_hintergrund_position}">
		
		<div class="wrapper {if $Data.nnwebEmotionParallax_textbox_anzeigen}visible{/if} {$Data.nnwebEmotionParallax_textbox_position_x} {$Data.nnwebEmotionParallax_textbox_position_y}" style="text-align:{$Data.nnwebEmotionParallax_textbox_text_align};width:{$Data.nnwebEmotionParallax_textbox_width}%;">
			{if $Data.nnwebEmotionParallax_ueberschrift_anzeigen}
				<{$Data.nnwebEmotionParallax_ueberschrift_tag} class="headline {$Data.nnwebEmotionParallax_ueberschrift_cls}">
					{$Data.nnwebEmotionParallax_ueberschrift_text}
				</{$Data.nnwebEmotionParallax_ueberschrift_tag}>
			{/if}
			{if $Data.nnwebEmotionParallax_text_anzeigen}
				<p class="{$Data.nnwebEmotionParallax_text_cls}">{$Data.nnwebEmotionParallax_text_text}</p>
			{/if}
			{if $Data.nnwebEmotionParallax_button_anzeigen}
				<a class="{$Data.nnwebEmotionParallax_button_cls}" href="{$link}" target="{$Data.nnwebEmotionParallax_button_link_target}">
					<span>{$Data.nnwebEmotionParallax_button_text}</span>
				</a>
			{/if}
		</div>
	</div>
{/block}