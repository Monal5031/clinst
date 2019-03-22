import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import PropTypes from 'prop-types';

import { handlePost } from '../actions/userActions';

class Fetch extends React.Component {
	state = {
		image: null,
		imageSource: null,
		caption: ''
	};

	handleChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			let imageSource = null;
			let reader = new FileReader();
			reader.onload = e => {
				imageSource = e.target.result;
				this.setState({ imageSource });
			};
			reader.readAsDataURL(e.target.files[0]);
			this.setState({
                image: e.target.files[0]
            });
		}
	};

	handleInputChange = (e) => {
		this.setState({
            caption: e.target.value
        });
	};

	handlePost = () => {
		const { image, caption } = this.state;

		if (!image) {
			return swal('No image selected');
		} else if (!caption.trim().length) {
			return swal('Please add a valid caption');
		}

		this.props.handlePost({
            image, caption
        });
		this.setState({
			image: null,
			imageSource: null,
			caption: ''
		});
	};

	render() {
		return (
			<div className="" id="modal">
				<div className="">
					<h1 className="">Add Post</h1>
					<a href="#" className="modal__close-button">
						&times;
					</a>
					<div className="">
						<div className="">
							{!this.state.image ? (
								<div className="">Click to upload image</div>
							) : (
								<img
									src={this.state.imageSource}
									alt="Uploaded Image"
									className=""
								/>
							)}
							<input
								type="file"
								className=""
								id="inputfile"
								accept="image/*"
								onChange={this.handleChange}
							/>
							<label htmlFor="inputfile">Upload Image</label>
						</div>
						<div className="">
							<h3>Caption</h3>
							<textarea
								type="text"
								placeholder="Add Caption"
								value={this.state.caption}
								onChange={this.handleInputChange}
							/>
						</div>
					</div>
					<div className="modal__buttons">
						<a href="#" className="btn btn--primary" onClick={this.handlePost}>
							Add Post
						</a>
						<a href="#" className="btn">
							Cancel
						</a>
					</div>
				</div>
			</div>
		);
	}
}

Fetch.propTypes = {
	handlePost: PropTypes.func.isRequired
};

export default connect(null, { handlePost })(Fetch);