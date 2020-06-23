speed = 10;
const plantTaron = extendContent(GenericSmelter, "ultimate-cultivator", {
drawLayer(tile){
Draw.rect(this.name + "-rotator", tile.drawx(), tile.drawy(), tile.entity.totalProgress*speed + 10);
}
});
plantTaron.layer = Layer.turret