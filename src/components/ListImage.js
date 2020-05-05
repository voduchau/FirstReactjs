import React from 'react';

class ListImage extends React.Component {
    renderList = () => {
        return this.props.listImage.map((item)=>{

            return (
                <div key={item.id}>
                    <img src={item.urls.regular} />
                </div>
                
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}
export default ListImage;