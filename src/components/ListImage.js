import React from 'react';

class ListImage extends React.Component {
    renderList = () => {
        return this.props.listImage.map((item)=>{
            console.log(item,'item')
            return (
                <img src={item.urls.regular} />
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