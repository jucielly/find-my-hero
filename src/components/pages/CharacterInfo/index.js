import React from 'react';
import Header from '../../organisms/Header'
import NavigationOptions from '../../molecules/NavigationOptions'
import InformationCard from '../../organisms/InformationCard'


const Character = () => {
    return (
        <>
            <Header navigationOptions={<NavigationOptions />} />
             <InformationCard title="biografia" ImgSubtitle="Peter park "imgTitle="Spider-man" src="assets/spider-man.jpg" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis, augue in accumsan tempus, ipsum nisi auctor felis, ac gravida risus libero nec turpis. Fusce nec turpis ultrices, vehicula libero condimentum, tincidunt dui. In hac habitasse platea dictumst. Fusce mattis pharetra lectus, sit amet finibus dui semper eu. Etiam nec eros consectetur odio aliquam aliquet ut ut libero. Morbi blandit volutpat fringilla. Sed sit amet tristique dui. Suspendisse tempor, ex eget eleifend tempor, lacus ex posuere nisl, sit amet euismod orci ante eget diam. Pellentesque id dolor risus. Nulla convallis molestie libero. Duis venenatis ex sit amet purus pulvinar maximus. Morbi efficitur eros non nisl sagittis, id varius risus lobortis. Donec facilisis diam quis nisi cursus sodales. Phasellus dui velit, pellentesque sed mauris id, porttitor finibus mi. Nunc fermentum nibh id risus interdum blandit." />
        </>
    )
}

export default Character


