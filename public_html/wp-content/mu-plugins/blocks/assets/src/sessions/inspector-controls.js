/**
 * WordPress dependencies
 */
const { PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;
const { InspectorControls } = wp.editor;
const { Component } = wp.element;
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import FeaturedImageInspectorControls from '../shared/featured-image/inspector-control';
import { GridInspectorPanel }         from '../shared/post-list';

/**
 * Component for block controls that appear in the Inspector Panel.
 */
class SessionsInspectorControls extends Component {
	/**
	 * Render the controls.
	 *
	 * @return {Element}
	 */
	render() {
		const { attributes, setAttributes, blockData } = this.props;
		const { show_speaker, content, show_meta, show_category, sort } = attributes;
		const { options } = blockData;

		return (
			<InspectorControls>
				<GridInspectorPanel
					{ ...this.props }
				/>

				<PanelBody title={ __( 'Content Settings', 'wordcamporg' ) } initialOpen={ true }>
					<PanelRow>
						<SelectControl
							label={ __( 'Description', 'wordcamporg' ) }
							value={ content || 'full'  }
							options={ options.content }
							onChange={ ( value ) => setAttributes( { content: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Details', 'wordcamporg' ) }
							help={ __( 'Show date, time, and track.', 'wordcamporg' ) }
							checked={ show_meta === undefined ? false : show_meta }
							onChange={ ( value ) => setAttributes( { show_meta: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Categories', 'wordcamporg' ) }
							help={ __( 'Show session categories.', 'wordcamporg' ) }
							checked={ show_category === undefined ? false : show_category }
							onChange={ ( value ) => setAttributes( { show_category: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Speakers', 'wordcamporg' ) }
							help={ __( 'Show session speakers.', 'wordcamporg' ) }
							checked={ show_speaker  === undefined ? false : show_speaker }
							onChange={ ( value ) => setAttributes( { show_speaker: value } ) }
						/>
					</PanelRow>
				</PanelBody>

				<FeaturedImageInspectorControls
					title={ __( 'Image size', 'wordcamporg' ) }
					help={ __( 'Specify image height and width, or select a predefined size.', 'wordcamporg' ) }
					selectLabel={ __( 'Size', 'wordcamporg' ) }
					{ ...this.props }
				/>

				<PanelBody title={ __( 'Sorting', 'wordcamporg' ) }>
					<PanelRow>
						<SelectControl
							label={ __( 'Sort by', 'wordcamporg' ) }
							value={ sort }
							options={ options.sort || 'session_time' }
							onChange={ ( value ) => setAttributes( { sort: value } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default SessionsInspectorControls;
