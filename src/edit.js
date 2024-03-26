/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, AlignmentControl, BlockControls, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExernalLink
} from '@wordpress/components';



export default function Edit( { attributes, setAttributes } ) {

	const blockProps = useBlockProps();
	const { content, align, textColor, backgroundColor, kaLink, linkLabel, hasLinkNofollow } = attributes;

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	}

	const onChangeAlign = ( newAlign ) => {
		setAttributes( { align: newAlign === undefined ? 'none' : newAlign } );
	}

	const onChangeBackgroundColor = ( newBackgroundColor ) => {
		setAttributes( { backgroundColor: newBackgroundColor } );
	}

	const onChangeTextColor = ( newTextColor ) => {
		setAttributes( { textColor: newTextColor } );
	}

	const onChangeKaLink = (newKaLink) => {
		setAttributes( { kaLink: newKaLink === undefined ? '' : newKaLink } );
	}

	const onChangeLinkLabel = (newLinkLabel) => {
		setAttributes( { linkLabel: newLinkLabel === undefined ? '' : newLinkLabel } );
	}

	const toggleNofollow = () => {
		setAttributes( { hasLinkNofollow: ! hasLinkNofollow } );
	}

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color settings', 'ka-example-block') }
					initialOpen={ false }
					colorSettings={[
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __( 'Text color', 'ka-example-block')
						},
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __( 'Background color', 'ka-example-block')
						}
					]}
				/>
				<PanelBody
					title={ __('Link Settings')}
					initialOpen={ true }
				>
					<PanelRow>
						<fieldset>
							<TextControl 
								label={ __( 'KA Link', 'ka-example-block') }
								value={ kaLink }
								onChange={ onChangeKaLink }
								help={ __( 'Add your Academy Link', 'ka-example-block') }
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl 
								label={ __( 'Link label', 'ka-example-block') }
								value={ linkLabel }
								onChange={ onChangeLinkLabel }
								help={ __( 'Add your Academy Link', 'ka-example-block') }
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl 
								label={ __( 'Add rel = nofollow', 'ka-example-block') }
								checked={ hasLinkNofollow }
								onChange={toggleNofollow }
								help={ hasLinkNofollow ? 'Has rel nofollow' : 'No rel nofollow' }
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ onChangeAlign } />
			</BlockControls>
			<RichText 
				{ ...blockProps }
				tagName="p"
				onChange={ onChangeContent }
				allowedFormats={ [ 'core/bold', 'core/italic'] }
				value={ content }
				placeholder={ __( 'Write your text...' ) }
				style={{ textAlign: align, backgroundColor: backgroundColor, color: textColor }}
			/>
			<ExternalLink
				href={ kaLink }
				className="ka-button"
				rel={ hasLinkNofollow ? "nofollow" : "" }
			>
				{ linkLabel }
			</ExternalLink>
		</>
	);
}
