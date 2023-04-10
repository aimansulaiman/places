import Nav from "~/lib/nav/Nav";
import {ImageWithPlaceholder} from "~/components_ui/ImageWithPlaceholder";
import {white_cross} from "~/assets";

interface CloseNavProps {
    showLeftContent: boolean
}

export const CloseNav = (props:CloseNavProps) => (
    <Nav
      leftContent={
        <ImageWithPlaceholder
          source={white_cross}
          style={{
              width: 14,
              height: 14
          }}
        />
      }
    {...props}
    />
)

export const BasicHeader= (props:CloseNavProps) => (
    <Nav
        {...props}
    />
)
