/**Làng */
import danlang from '../assets/imageData/danlang.jpg'
import baove from '../assets/imageData/baove.jpg'
import phuthuy from '../assets/imageData/phuthuy.jpg'
import duocsi from '../assets/imageData/duocsi.png'
import conqua from '../assets/imageData/conqua.jpeg'
import cao from '../assets/imageData/cao.png'
import baanhem from '../assets/imageData/baanhem.png'
import haichiem from '../assets/imageData/haichiem.png'
import badong from '../assets/imageData/badong.png'
import cupid from '../assets/imageData/cupid.jpg'
import gialang from '../assets/imageData/gialang.jpg'
import hiepsikiemgi from '../assets/imageData/hiepsikiemgi.png'
import kisi from '../assets/imageData/kisi.png'
import nguoidaytotantuy from '../assets/imageData/nguoidaytotantuy.jpg'
import thangngoc from '../assets/imageData/thangngoc.jpg'
import thethan from '../assets/imageData/thethan.jpg'
import thiensu from '../assets/imageData/thiensu.png'
import thosan from '../assets/imageData/thosan.jpg'
import tientri from '../assets/imageData/tientri.jpg'
import tihi from '../assets/imageData/tihi.jpg'
import thamphanlapbap from '../assets/imageData/thamphanlapbap.png'
import nguoithuanphucgau from '../assets/imageData/nguoithuanphucgau.png'
import thoimien from '../assets/imageData/thoimien.png'

/**Sói */
import soithuong from '../assets/imageData/soithuong.jpg'
import soilua from '../assets/imageData/soilua.png'
import soinguyen from '../assets/imageData/soinguyen.jpg'
import soixauxa from '../assets/imageData/soixauxa.png'

/**Phe thứ 3 */
import giaophai from '../assets/imageData/giaophai.jpg'
import thoisao from '../assets/imageData/thoisao.jpg'
import soitrang from '../assets/imageData/soitrang.jpg'

/**Tùy Chọn */
import dienvien from '../assets/imageData/dienvien.png'
import duatrehoang from '../assets/imageData/duatrehoang.png'
import nguoimuaroi from '../assets/imageData/nguoimuaroi.png'
import soiorcho from '../assets/imageData/soiorcho.jpg'

/**Role Khác */
import canhsat from '../assets/imageData/canhsat.jpg'

const wolfdata = {
    phedan: [
        {
            title: 'Dân Làng',
            image: danlang,
            description: 'Dân làng chiếm đại đa số trong các nhân vật và nhiệm vụ của dân làng là làm sao chỉ chứng được ai là ma sói đang đội lốt người dân để mang sói đi treo cổ. Người dân có nhiều thời gian để đưa ra suy luận, phán đoán trước khi đưa ra lựa chọn sau cùng. Sẽ bị chết nếu bị Ma sói cắn trúng.'
        },
        {
            title: 'Bảo Vệ',
            image: baove,
            description: 'Mỗi đêm Quản trò sẽ gọi Bảo vệ dậy. Nhiệm vụ của Bảo vệ là lựa 1 chọn người để cứu, Bảo vệ có thể chọn tự cứu mình. Người được Bảo vệ cứu nếu như bị Ma sói cắn thì vẫn sẽ sống sót vào sáng hôm sau. Nhưng Bảo vệ không được cứu 1 người liên tiếp 2 lượt chơi. Lưu ý: Người được bảo vệ vẫn có thể chết do bị Phù Thủy đầu độc.'
        },
        {
            title: 'Con Quạ',
            image: conqua,
            description: 'Vào cuối mỗi đêm, Con quạ sẽ chọn 1 người chơi mà nó tin là Sói, Quản trò sẽ đặt lá bài “Chỉ định” ngay trước người đó. Và người đó tự động có 2 phiếu chống lại họ trong suốt sáng hôm đó. Con quạ có thể chỉ định Chủ quán rượu (kể cả khi Chủ quán rượu vẫn còn chức năng miễn dịch). Con chim ưng không thể chỉ định Người vô gia cư.'
        },
        {
            title: 'Cáo',
            image: cao,
            description: 'Mỗi đêm, Cáo chọn ba người chơi. Nếu trong ba người chơi này, có ít nhất một người là Ma sói, thì Quản trò sẽ ra dấu cho Cáo và Cáo sẽ giữ nguyên năng lực của mình. Nếu như không có Ma sói nào, Cáo sẽ mất đi năng lực. '
        },
        {
            title: 'Hai Chị Em',
            image: haichiem,
            description: 'Thuộc phe dân làng. Không có chức năng đặc biệt nào cả. Trong đêm đầu tiên, hai chị em sẽ tỉnh dậy và nhận biết nhau. Điều này giúp họ có thể tin tưởng người còn lại.'
        },
        {
            title: 'Ba Anh Em',
            image: baanhem,
            description: 'Tương tự như hai chị em. Họ không có chức năng gì đặc biệt ngoài việc thức dậy vào đêm đầu tiên để nhận biết nhau.'
        },
        {
            title: 'Bà Đồng',
            image: badong,
            description: 'Chỉ chơi cùng Sự Kiện (Event New Moon) Đầu ván, quản trò chọn ra 5 lá Gọi hồn (Spiritualism) từ bộ Trăng Non (New Moon) và bí mật giữ lại. Mỗi đêm, quản trò gọi Bà đồng dậy và hỏi mụ có muốn sử dụng năng lực không. Nếu có, quản trò đọc lớn 4 câu hỏi từ 1 lá Gọi Hồn mình giữ. Bà đồng ra dấu chọn 1 trong 4 câu và chỉ một người chơi. Sáng tiếp theo, người được chỉ định sẽ trở thành người gọi hồn và hỏi lớn câu hỏi được chọn. Người chết đầu tiên trong ván phải trả lời ngắn gọn “CÓ!!!” hoặc “KHÔNG!!!”. Lá Gọi Hồn đó sẽ bị hủy.'
        },
        {
            title: 'Phù Thủy',
            image: phuthuy,
            description: 'Nhân vật này sở hữu 2 lọ thuốc, 1 lọ dùng cứu người và 1 lọ dùng để giết người. Ban đêm, Phù Thủy được gọi dậy và quản trò sẽ chỉ ra ai là người bị Ma sói cắn, Phù Thủy có quyền chọn cứu người đó hoặc không. Ngoài ra, Phù thủy có thể dùng lọ thuốc độc để giết chết người mà mình nghi là ma sói. Có thể sử dụng 1 lúc cả 2 lọ thuốc khi đó tác dụng của thuốc sẽ mất. Một khi đã dùng bình thì Phù Thủy sẽ mất đi chức năng tương ứng, tuy nhiên vẫn được gọi dậy mỗi đêm và biết ai chết.'
        },
        {
            title: 'Dược sĩ',
            image: duocsi,
            description: 'Dược sĩ có 2 Bình: Bình thuốc mê và Bình hồi phục. Mỗi đêm Dược sĩ sẽ được gọi dậy để sử dụng hai chức năng này. Bình Thuốc mê dùng để làm cho một người chơi mất quyền biểu quyết và không được nói chuyện gì trong vòng một ngày. Bình Hồi phục nếu chọn đúng người bị Phù thủy giết sẽ được Bình hồi phục cứu không chết. Mỗi chức năng chỉ được sử dụng một lần duy nhất. '
        },
        {
            title: 'Cupid',
            image: cupid,
            description: 'Có chức năng ghép đôi 2 người bất kỳ với nhau. Đầu mỗi ván chơi, Cupid sẽ được gọi dậy và chọn ra hai người yêu nhau. Cupid sau đó nhắm mắt lại và hai người yêu nhau sẽ được Quản Trò gọi dậy để biết mặt và Vai Trò của nhau. Nếu hai người thuộc hai phe khác nhau (Sói vs Dân) thì họ thành phe thứ 3 với nhiệm vụ là hai người cuối cùng sống sót. Trong trường hợp, có 1 trong 2 người được ghép đôi bị chết thì người còn lại cũng phải chết chung. Thần tình yêu có thể tự ghép đôi cho chính mình.'
        },
        {
            title: 'Già Làng',
            image: gialang,
            description: 'Đây có thể coi là Trùm cuối ở phe Dân làng và mọi người phải ra sức bảo vệ nhân vật này. Già Làng có hai mạng khi bị Ma sói cắn. Tuy nhiên, nếu bị treo cổ, bị Thợ Săn bắn hoặc bị Phù Thủy giết thì Già Làng vẫn chết ngay lập tức. Khi Già Làng chết, tất cả các vai trò đặc biệt trừ Thợ Săn đều bị mất chức năng.'
        },
        {
            title: 'Hiệp Sĩ Kiếm Gỉ',
            image: hiepsikiemgi,
            description: 'Nếu bị sói cắn, thì Hiệp sĩ kiếm gỉ sẽ bị chết và Sói cắn hiệp sĩ sẽ bị thương và chỉ sống thêm được 1 ngày đêm. Quản trò sẽ thu lại lá bài và công bố Sói chết vào sáng hôm sau nữa.'
        },
        {
            title: 'Kị Sĩ',
            image: kisi,
            description: 'Duy nhất một lần vào Ban ngày, trước khi tiến hành treo cổ, Kị sĩ được lật 1 lá bài lên và chọn một người. Quản trò thông báo người được chọn có là Ma sói hay không. Nếu là Sói thì Sói đó chết và ngày đó kết thúc ngay lập tức. Nếu người đó không phải là Sói thì Kị sĩ chết và trò chơi tiếp tục.'
        },
        {
            title: 'Người Đầy Tớ Tận Tụy',
            image: nguoidaytotantuy,
            description: 'Người hầu tận tụy có thể, bất cứ khi nào trong trò chơi, trao đổi thẻ của mình với nạn nhân bị bỏ phiếu của ngôi làng và đóng vai nhân vật  cho đến cuối trò chơi.'
        },
        {
            title: 'Thằng Ngốc',
            image: thangngoc,
            description: 'Nếu dân làng bầu chọn Thằng ngốc để treo cổ, lúc này Thằng ngốc sẽ lật lá bài của mình lên và ngay lập tức được cả làng tha thứ và tiếp tục sống. Tuy nhiên, sau đó, Thằng ngốc sẽ không còn quyền bầu chọn nữa. Lúc này, dân làng phải bình chọn lại ai là người bị tình nghi là sói và đem lên giàn treo.'
        },
        {
            title: 'Thế Thân',
            image: thethan,
            description: 'Theo cách chơi bài Ma Sói New Moon, nếu trong lượt bỏ phiếu có kết quả hòa thì người bị loại sẽ là Kẻ thế thân. Nhân vật này phải cố hết sức để tránh các lượt vote bằng nhau. Nếu Kẻ thế thân bị loại, người này có quyền chọn những dân làng được tham gia bình chọn vào sáng hôm sau.'
        },
        {
            title: 'Thiên Sứ',
            image: thiensu,
            description: 'Nhiệm vụ của thiên sứ là bị sói cắn vào đêm đầu tiên hoặc bị dân làng treo cổ vào sáng đầu tiên. Nếu hoàn thành nhiệm vụ, thiên sứ sẽ lập tức chiến thắng tất cả người chơi khác. Ngược lại, thiên sứ sẽ trở thành một dân làng bình thường.'
        },
        {
            title: 'Thợ Săn',
            image: thosan,
            description: 'Mỗi đêm, Thợ săn cũng sẽ được gọi dậy và chọn 1 người chơi. Trong trường hợp Thợ săn bị ma sói cắn chết, người được Thợ săn lựa chọn cũng sẽ chết theo.  Nếu người mà Thợ Săn chọn chết trong đêm thì Thợ Săn sẽ không chết theo. Nếu thợ săn bị treo cổ vào ban ngày thì có quyền chọn 1 người để cùng bị treo cổ chung.'
        },
        {
            title: 'Tiên Tri',
            image: tientri,
            description: 'Buổi tối tiên tri sẽ được quản trò gọi dậy và có quyền đoán trước ai là Ma sói. Nếu đúng người quản trò sẽ gật đầu hoặc giơ tay đồng ý, nếu không phải quản trò sẽ lắc đầu. Nhiệm vụ của tiên tri là phải ra mặt đúng lúc, dùng lập luận hướng dân làng tìm ra Ma sói. Sẽ bị chết nếu bị Ma sói cắn trúng.'
        },
        {
            title: 'Ti Hí',
            image: tihi,
            description: 'Đây là một quân bài rất quan trọng. Người chơi sẽ phát huy được chức năng của mình trong đêm thứ hai kể từ khi trò chơi bắt đầu. Quản trò sẽ gọi sói dậy, cô gái có quyền mắt hí để nhận biết xem ai là sói. Nhưng phải thật khéo léo vì nếu để sói phát hiện ra sói sẽ giết chết bạn ngay.'
        },
        {
            title: 'Thẩm Phán Lắp Bắp',
            image: thamphanlapbap,
            description: 'Một lần trong ván chơi, Thẩm phán có quyền đưa ra quyết định tiến hành lần vote treo cổ  thứ 2 trong một buổi sáng nào đó, bằng cách ra dấu hiệu nào đó. Dấu hiệu này sẽ được Thẩm phản chỉ dấu cho Quản trò vào đêm đầu tiên khi thức dậy.'
        },
        {
            title: 'Gấu',
            image: nguoithuanphucgau,
            description: 'Nếu một trong hai người bên cạnh Người thuần phục gấu là Ma sói, Quản trò sẽ ra dấu cho Người thuần phục gấu biết.'
        },
        {
            title: 'Thôi Miên',
            image: thoimien,
            description: 'Mỗi đêm, Thầy thôi miên tỉnh dậy và được chọn một người để mê hoặc. Nếu đêm đó Thầy thôi miên chết, người bị mê hoặc sẽ chết thay. Thầy thôi miên không được chọn liên lục 1 người ở 2 đêm liên tiếp nhau.'
        }
    ],
    phesoi: [
        {
            title: 'Sói Thường',
            image: soithuong,
            description: 'Phe ma sói nắm giữ 4 lá bài. Người chọn trúng lá bài là ma sói có nhiệm vụ mỗi đêm sẽ được gọi dậy bởi quản trò và làm thịt 1 người dân. Điểm thú vị chính là ma sói có thể chọn không cắn ai hoặc tự tàn sát lẫn nhau.'
        },
        {
            title: 'Sói Lửa',
            image: soilua,
            description: 'Khi có ít nhất 1 sói chết, vào Đêm tiếp theo, Sói lửa có thể chọn một người. Người được chọn sẽ bị mất năng lực vĩnh viễn. Khi có ít nhất 2 sói chết, có thể thực hiện chức năng này thêm 1 lần nữa.'
        },
        {
            title: 'Sói Nguyền',
            image: soinguyen,
            description: 'Thuộc phe sói. Một lần trong trò chơi, nhân vật này có thể biến một nạn nhân của sói thành Ma sói.'
        },
        {
            title: 'Sói Xấu Xa',
            image: soixauxa,
            description: 'Thuộc phe sói. Nhưng, cho đến khi không còn  sói con, Đứa trẻ hoang dã hay chó sói chết, anh ta có thể dậy một lần nữa và ăn thịt thêm một dân làng khác.'
        }
    ],
    phethu3: [
        {
            title: 'Giáo Phái',
            image: giaophai,
            description: 'Trước khi bắt đầu ván, quản trò chia làng thành 2 phe, căn cứ theo giới tính, tuổi tác, hoặc có đeo kính hay không,… và thông báo 2 phe trước cả làng. Thành viên giáo phái sẽ thuộc 1 trong 2 phe. Hắn chiến thắng khi và chỉ khi loại bỏ tất cả người chơi trong phe đối địch. Hắn không có năng lực đặc biệt nào ngoài biệt tài lôi kéo thành kiến của dân làng. '
        },
        {
            title: 'Thổi Sáo',
            image: thoisao,
            description: 'Chàng Thổi Sáo mỗi đêm sẽ được thôi miên hai người. Những người bị thôi miên sau đó sẽ được gọi hết dậy để biết mặt lẫn nhau. Chàng Thổi Sáo thắng khi tất cả những người chơi còn sống đều đã bị thôi miên.'
        },
        {
            title: 'Sói Trắng',
            image: soitrang,
            description: 'Mục tiêu của Sói Trắng là người duy nhất còn sống sót trong làng. Bình thường, Sói Trắng hành động như những con Sói khác để chúng tin tưởng. Sói Trắng thức cùng Sói và cùng chọn 1 nạn nhân để cắn. Và sau khi những con Sói ngủ, Sói trắng có thể thức dậy và giết 1 con Sói nếu muốn.'
        }

    ],
    phetuychon: [
        {
            title: 'Diễn Viên',
            image: dienvien,
            description: 'Nếu trò chơi có sử dụng thẻ Diễn viên, bổ sung thêm 3 thẻ bài vào bộ trò chơi, sau khi chia bài cho mỗi người xong thì để 3 thẻ đó ở bên ngoài. Diễn viên trong 3 đêm đầu tiên có thể tráo đổi thẻ của mình với một trong ba thẻ này. Sau đêm thứ ba, Diễn viên sẽ trở về thành một Dân thường.'
        },
        {
            title: 'Đứa Trẻ Hoang',
            image: duatrehoang,
            description: 'Thuộc phe dân làng. Vào đầu trò chơi, chọn một người chơi. Nếu trong trò chơi, người chơi này chết, đứa trẻ hoang dã trở thành Ma sói.'
        },
        {
            title: 'Người Múa Rối',
            image: nguoimuaroi,
            description: 'Một lần duy nhất trong suốt ván chơi, Người múa rối có thể chỉ định Sói ăn thịt một người. Người đó có thể là một người khác so với sự thống nhất ban đầu của Sói. Người múa rối cũng có thể buộc Sói ăn thịt một Sói khác.'
        },
        {
            title: 'Sói Hay Chó',
            image: soiorcho,
            description: 'Khi bắt đầu trò chơi, anh ta có thể chọn nếu muốn trở thành một dân làng đơn giản hoặc một Ma sói.'
        }
    ],
    anotherRole: [
        {
            title: 'Cảnh Sát Trưởng',
            image: canhsat,
            description: 'Cảnh sát được chọn bởi Trưởng làng. Nhân vật này sẽ phụ trách việc bốc các lá bài sự kiện.'
        }
    ]
}

export default wolfdata