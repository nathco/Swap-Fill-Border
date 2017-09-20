// Plugin: Swap Fill & Border
// Source: github.com/nathco/Swap-Fill-Border
// Author: Nathan Rutzky
// Update: 2.2


function onRun(context) {
        var selection = context.selection
    
    for (var i=0; i<selection.count(); i++) {
    
        var layer = [[selection objectAtIndex:i] style]
        var fills = [[layer fills] count]
        var borders = [[layer borders] count]
    
        if (fills && !borders) {

            
            var layerFill = layer.fills()[0]
        
            var fillType = [layerFill fillType]
            var fillColor = [layerFill color]
            var fillGradient = [layerFill gradient]
            
            [layerFill setIsEnabled:0]
            [layer addStylePartOfType:1]
            var layerBorder = layer.borders()[0]

            [layerBorder setThickness:2]
            [layerBorder setPosition:1]
            [layerBorder setFillType:fillType]
            [layerBorder setGradient:fillGradient]
            [layerBorder setColor:fillColor]
        }
    
        if (!fills && borders) {
        
            var layerBorder = layer.borders()[0]

            var borderType = [layerBorder fillType]
            var borderColor = [layerBorder color]
            var borderGradient = [layerBorder gradient]
            
            [layerBorder setIsEnabled:0]
            [layer addStylePartOfType:0]
            var layerFill = layer.fills()[0]

            [layerFill setFillType:borderType]
            [layerFill setColor:borderColor]
            [layerFill setGradient:borderGradient]
        }
    
        if (fills && borders) {      

            var layerBorder = layer.borders()[0]
            var layerFill = layer.fills()[0]
        
            var borderEnabled = [layerBorder isEnabled]
            var borderSize = [layerBorder thickness]
            var borderType = [layerBorder fillType]
            var borderColor = [layerBorder color]
            var borderGradient = [layerBorder gradient]
            var fillEnabled = [layerFill isEnabled]
            var fillType = [layerFill fillType]
            var fillColor = [layerFill color]
            var fillGradient = [layerFill gradient]
        
            if (fillEnabled && borderEnabled) {
            
                [layerBorder setThickness:borderSize]
                [layerBorder setFillType:fillType]
                [layerBorder setColor:fillColor]
                [layerBorder setGradient:fillGradient]
                [layerFill setFillType:borderType]
                [layerFill setColor:borderColor]
                [layerFill setGradient:borderGradient]
            }
            
            if (!fillEnabled && borderEnabled) {
            
                [layerBorder setIsEnabled:0]
                [layerFill setIsEnabled:1]
                [layerFill setColor:borderColor]
                [layerFill setGradient:borderGradient]
            }
        
            if (fillEnabled && !borderEnabled) {
            
                [layerFill setIsEnabled:0]
                [layerBorder setIsEnabled:1]
                [layerBorder setColor:fillColor]
                [layerBorder setGradient:fillGradient]
            }
        }
    }
    
    context.document.reloadInspector()
};