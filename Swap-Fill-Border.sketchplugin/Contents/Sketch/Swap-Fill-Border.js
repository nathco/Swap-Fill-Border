var swapFillBorder = function(context) {

  var selection = context.selection

  for (var i=0; i<selection.count(); i++) {

    var layer = [[selection objectAtIndex:i] style]
      // log(layer)
    var fills = [[layer fills] count]
      //log(fills) if fill = 1
    var borders = [[layer borders] count]
      //log(borders) if border = 1

    if (fills && !borders) {
      // log ('I DONT have a Border')

      var fillType = [[layer fill] fillType]
        // log(fillType) if = 0
      var fillColor = [[layer fill] color]
        // log(fillColor) if = rgba
      var fillGradient = [[layer fill] gradient]
        // log(fillGradient)

        [[layer fill] setIsEnabled:0]
        [[layer borders] addNewStylePart]
        [[layer border] setThickness:2]
        [[layer border] setPosition:1]
        [[layer border] setFillType:fillType]
        [[layer border] setGradient:fillGradient]
        [[layer border] setColor:fillColor]

    }

    if (!fills && borders) {
      // log ('I DONT have a Fill')

      var borderType = [[layer border] fillType]
      var borderColor = [[layer border] color]
      var borderGradient = [[layer border] gradient]

      [[layer border] setIsEnabled:0]
      [[layer fills] addNewStylePart]
      [[layer fill] setFillType:borderType]
      [[layer fill] setColor:borderColor]
      [[layer fill] setGradient:borderGradient]

    }

   if (fills && borders) {
      // log ('I have a Fill & Border')

      var borderEnabled = [[layer border] isEnabled]
      var borderSize = [[layer border] thickness]
      var	borderType = [[layer border] fillType]
      var	borderColor = [[layer border] color]
      var	borderGradient = [[layer border] gradient]
      var fillEnabled = [[layer fill] isEnabled]
      var fillType = [[layer fill] fillType]
      var	fillColor = [[layer fill] color]
      var	fillGradient = [[layer fill] gradient]

      if (fillEnabled && borderEnabled) {

        [[layer border] setThickness:borderSize]
        [[layer border] setFillType:fillType]
        [[layer border] setColor:fillColor]
        [[layer border] setGradient:fillGradient]
        [[layer fill] setFillType:borderType]
        [[layer fill] setColor:borderColor]
        [[layer fill] setGradient:borderGradient]
      }

      if (!fillEnabled && borderEnabled) {

        [[layer border] setIsEnabled:0]
        [[layer fill] setIsEnabled:1]
        [[layer fill] setColor:borderColor]
        [[layer fill] setGradient:borderGradient]
      }

      if (fillEnabled && !borderEnabled) {

        [[layer fill] setIsEnabled:0]
        [[layer border] setIsEnabled:1]
        [[layer border] setColor:fillColor]
        [[layer border] setGradient:fillGradient]
      }

    }

  }
}
