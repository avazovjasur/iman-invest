import {
    StoriesListCardTitlePosition,
    StoriesListCardTitleTextAlign,
    StoriesListCardViewVariant,
} from "@inappstory/react-sdk";

export const commonOptions = {
   hasShare: true,
   hasLike: true,
   hasFavorite: true,
}

export const storiesListOptions = {
      card: {
         title: {
            color: "black",
            padding: 8,
         },
         gap: 10,
         height: 100,
         variant: "quad",
         border: {
            radius: 20,
            color: "blue",
            width: 2,
            gap: 3,
         },
         boxShadow: null,
         opacity: 1,
         mask: {
            color: "rgba(34, 34, 34, 0.3)",
         },
         opened: {
            boxShadow: null,
            opacity: null,
            mask: {
               color: "rgba(34, 34, 34, 0.1)",
            },
         },
      },
      layout: {
         height: 0,
         backgroundColor: "transparent",
      },
      sidePadding: 20,
      topPadding: 20,
      bottomPadding: 20,
      bottomMargin: 0,
      navigation: {
         showControls: false,
         controlsSize: 48,
         controlsBackgroundColor: "white",
         controlsColor: "black",
      },
}     
           
export const storyReaderOptions = {
      closeButtonPosition: "end",
      scrollStyle: "flat",
      slideBorderRadius: 5,
}